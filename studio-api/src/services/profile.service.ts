import { join } from 'node:path';
import type { CandidateProfile } from '../models/studio.models.js';
import { FileStore } from './file-store.service.js';
import { CANDIDATE_RESUMES } from '../config/candidate-resumes.js';

const dataDir = join(process.cwd(), '.interviewops-studio', 'profiles');
const store = new FileStore<CandidateProfile>(dataDir);

const DEFAULT_ID = 'default';

export async function getProfile(): Promise<CandidateProfile> {
  let existing = await store.get(DEFAULT_ID);
  if (!existing && CANDIDATE_RESUMES.length > 0) {
    // Default to Java Track 1 or Python Track 1
    const defaultResume = CANDIDATE_RESUMES[0]!;
    const now = new Date().toISOString();
    existing = {
      id: DEFAULT_ID,
      targetRole: defaultResume.role,
      seniorityLevel: 'Senior',
      focusAreas: defaultResume.skills.slice(0, 8),
      resumeText: defaultResume.fullText,
      createdAt: now,
      updatedAt: now,
    };
    await store.save(existing);
  }
  return (
    existing ?? {
      id: DEFAULT_ID,
      focusAreas: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
}

export async function updateProfile(updates: Partial<CandidateProfile>): Promise<CandidateProfile> {
  let existing = await store.get(DEFAULT_ID);
  const now = new Date().toISOString();

  if (!existing) {
    existing = {
      id: DEFAULT_ID,
      focusAreas: [],
      createdAt: now,
      updatedAt: now,
    };
  }

  const updated: CandidateProfile = {
    ...existing,
    ...updates,
    id: DEFAULT_ID,
    updatedAt: now,
  };

  await store.save(updated);
  return updated;
}

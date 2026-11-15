import { Router } from 'express';
import { CANDIDATE_RESUMES } from '../config/candidate-resumes.js';
import { updateProfile } from '../services/profile.service.js';

const router = Router();

// GET /api/resumes - List all 10 resumes
router.get('/resumes', (_req, res) => {
  const list = CANDIDATE_RESUMES.map(({ fullText: _fullText, ...rest }) => rest);
  res.json(list);
});

// GET /api/resumes/:id - Get specific resume
router.get('/resumes/:id', (req, res) => {
  const resume = CANDIDATE_RESUMES.find((r) => r.id === req.params['id']);
  if (!resume) {
    res.status(404).json({ error: `Resume not found: ${req.params['id']}` });
    return;
  }
  res.json(resume);
});

// POST /api/resumes/:id/select - Make this resume the active candidate profile
router.post('/resumes/:id/select', async (req, res) => {
  const resume = CANDIDATE_RESUMES.find((r) => r.id === req.params['id']);
  if (!resume) {
    res.status(404).json({ error: `Resume not found: ${req.params['id']}` });
    return;
  }

  const updatedProfile = await updateProfile({
    targetRole: resume.role,
    seniorityLevel: 'Senior',
    focusAreas: resume.skills.slice(0, 8),
    resumeText: resume.fullText,
  });

  res.json({
    message: `Active resume switched to: ${resume.role} (${resume.specialization})`,
    activeResume: resume,
    profile: updatedProfile,
  });
});

export default router;

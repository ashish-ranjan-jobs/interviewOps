import { v4 as uuidv4 } from 'uuid';
import type { InterviewSession, InterviewMessage, CandidateProfile } from '../models/studio.models.js';
import { sessionStore } from './session-store.service.js';
import { getAvatarStateForMessage } from './avatar-state.service.js';
import { generateResponse, generateScorecard, generateStudyPlan } from './mock-interviewer.service.js';
import { getProfile } from './profile.service.js';
import {
  isGeminiAvailable,
  generateGeminiOpening,
  generateGeminiFollowUp,
  generateGeminiSummary,
} from './gemini.service.js';

function createMessage(role: InterviewMessage['role'], content: string): InterviewMessage {
  return {
    id: uuidv4(),
    role,
    content,
    createdAt: new Date().toISOString(),
    avatarState: getAvatarStateForMessage(role),
  };
}

export async function createSession(
  track: string,
  mode: string,
  provider: string,
  candidateProfileId?: string,
  model?: string
): Promise<InterviewSession> {
  let profile: CandidateProfile | undefined;
  try {
    profile = await getProfile();
  } catch {
    // profile not set
  }

  const session: InterviewSession = {
    id: uuidv4(),
    track,
    mode,
    provider,
    ...(model ? { model } : {}),
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    messages: [],
    candidateProfileId,
  };

  // System greeting
  session.messages.push(
    createMessage(
      'system',
      `Interview session started. Track: ${track}, Mode: ${mode}, Provider: ${provider}. This is a practice session only.`
    )
  );

  // Interviewer welcome
  session.messages.push(
    createMessage(
      'interviewer',
      `Welcome to your ${mode} interview practice session for the ${track} track. I will be your interviewer today. Remember, this is a safe space to practice — take your time and think through your answers.`
    )
  );

  // First question
  let firstQuestion: string;
  if (provider === 'gemini' && isGeminiAvailable()) {
    try {
      firstQuestion = await generateGeminiOpening(session, profile);
    } catch (err) {
      console.warn('Gemini opening question failed, falling back to mock:', err);
      firstQuestion = generateResponse(mode, 0, profile);
    }
  } else {
    firstQuestion = generateResponse(mode, 0, profile);
  }
  session.messages.push(createMessage('interviewer', firstQuestion));

  await sessionStore.save(session);
  return session;
}

export async function addCandidateMessage(sessionId: string, content: string): Promise<InterviewSession> {
  const session = await sessionStore.get(sessionId);
  if (!session) {
    throw new Error(`Session not found: ${sessionId}`);
  }
  if (session.status === 'finished') {
    throw new Error('Cannot add messages to a finished session.');
  }

  // Load profile if available
  let profile: CandidateProfile | undefined;
  try {
    profile = await getProfile();
  } catch {
    // profile not set
  }

  // Add candidate message
  session.messages.push(createMessage('candidate', content));

  // Determine interviewer response
  let response: string;
  const candidateCount = session.messages.filter((m) => m.role === 'candidate').length;

  if (session.provider === 'gemini' && isGeminiAvailable()) {
    try {
      response = await generateGeminiFollowUp(session, content, profile);
    } catch (err) {
      console.warn('Gemini follow-up generation failed, falling back to mock:', err);
      response = generateResponse(session.mode, candidateCount, profile);
    }
  } else {
    response = generateResponse(session.mode, candidateCount, profile);
  }

  session.messages.push(createMessage('interviewer', response));
  session.updatedAt = new Date().toISOString();
  await sessionStore.save(session);
  return session;
}

export async function finishSession(sessionId: string): Promise<InterviewSession> {
  const session = await sessionStore.get(sessionId);
  if (!session) {
    throw new Error(`Session not found: ${sessionId}`);
  }

  session.status = 'finished';

  if (session.provider === 'gemini' && isGeminiAvailable()) {
    try {
      const geminiData = await generateGeminiSummary(session);
      session.scorecard = geminiData.scorecard;
      session.studyPlan = geminiData.studyPlan;
      session.messages.push(createMessage('coach', geminiData.coachFeedback));
    } catch (err) {
      console.warn('Gemini scorecard generation failed, falling back to mock:', err);
      session.scorecard = generateScorecard(session.track, session.mode);
      session.studyPlan = generateStudyPlan();
      session.messages.push(
        createMessage(
          'coach',
          `Great effort! Your practice session is complete. Review your scorecard and study plan below to identify areas for improvement. Keep practicing!`
        )
      );
    }
  } else {
    session.scorecard = generateScorecard(session.track, session.mode);
    session.studyPlan = generateStudyPlan();
    session.messages.push(
      createMessage(
        'coach',
        `Great effort! Your practice session is complete. Review your scorecard and study plan below to identify areas for improvement. Keep practicing!`
      )
    );
  }

  session.updatedAt = new Date().toISOString();
  await sessionStore.save(session);
  return session;
}

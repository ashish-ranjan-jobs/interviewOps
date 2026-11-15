import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './server.js';

const VALID_AUTH = 'Basic ' + Buffer.from('ashish:InterviewOps@2026!').toString('base64');
const VALID_API_KEY = '51c42b9f1368d0548c84a8ed7005f6186031d916882835d86714f471994539ee';
const VALID_GATEWAY_SECRET =
  '90fd1ae79cf3eebc539d35f509518f261efdb41615ef59a4e11b42688188082b';

describe('Studio API Security & Authentication', () => {
  it('rejects unauthenticated requests with 401 Unauthorized', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Unauthorized');
  });

  it('rejects requests with invalid Basic auth credentials', async () => {
    const invalidAuth = 'Basic ' + Buffer.from('ashish:WrongPassword123').toString('base64');
    const res = await request(app).get('/api/health').set('Authorization', invalidAuth);
    expect(res.status).toBe(401);
  });

  it('rejects requests with invalid API key', async () => {
    const res = await request(app).get('/api/health').set('x-api-key', 'invalid-token-1234');
    expect(res.status).toBe(401);
  });

  it('allows access with valid HTTP Basic Auth', async () => {
    const res = await request(app).get('/api/health').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('allows access with valid Bearer token', async () => {
    const res = await request(app)
      .get('/api/health')
      .set('Authorization', `Bearer ${VALID_API_KEY}`);
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('allows access with valid X-API-Key header', async () => {
    const res = await request(app).get('/api/health').set('x-api-key', VALID_API_KEY);
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('allows access with valid internal Gateway secret', async () => {
    const res = await request(app)
      .get('/api/health')
      .set('x-internal-gateway-secret', VALID_GATEWAY_SECRET);
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('enforces high-security HTTP headers', async () => {
    const res = await request(app).get('/api/health').set('Authorization', VALID_AUTH);
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-frame-options']).toBe('DENY');
    expect(res.headers['strict-transport-security']).toContain('max-age=31536000');
    expect(res.headers['x-powered-by']).toBeUndefined();
  });
});

describe('Studio API Functional Endpoints', () => {
  it('GET /api/tracks returns available tracks including backend', async () => {
    const res = await request(app).get('/api/tracks').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(9);
    const trackIds = res.body.map((t: { id: string }) => t.id);
    expect(trackIds).toContain('backend-developer');
  });

  it('GET /api/modes returns available modes including system-design', async () => {
    const res = await request(app).get('/api/modes').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(13);
    const modeIds = res.body.map((m: { id: string }) => m.id);
    expect(modeIds).toContain('system-design');
  });

  it('GET /api/providers returns available providers including gemini', async () => {
    const res = await request(app).get('/api/providers').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(4);
    const providerIds = res.body.map((p: { id: string }) => p.id);
    expect(providerIds).toContain('gemini');
  });

  it('full session lifecycle: create, message, finish', async () => {
    // Create session
    const createRes = await request(app)
      .post('/api/sessions')
      .set('Authorization', VALID_AUTH)
      .send({ track: 'senior-frontend', mode: 'behavioral', provider: 'mock' });
    expect(createRes.status).toBe(201);
    expect(createRes.body.status).toBe('active');
    expect(createRes.body.messages.length).toBeGreaterThanOrEqual(3);

    const sessionId = createRes.body.id;

    // Send a message
    const msgRes = await request(app)
      .post(`/api/sessions/${sessionId}/messages`)
      .set('Authorization', VALID_AUTH)
      .send({ content: 'In my last role, I led a migration from a legacy jQuery app to Angular.' });
    expect(msgRes.status).toBe(200);
    expect(msgRes.body.messages.length).toBeGreaterThan(createRes.body.messages.length);

    // Finish session
    const finishRes = await request(app)
      .post(`/api/sessions/${sessionId}/finish`)
      .set('Authorization', VALID_AUTH);
    expect(finishRes.status).toBe(200);
    expect(finishRes.body.status).toBe('finished');
    expect(finishRes.body.scorecard).toBeDefined();
    expect(finishRes.body.studyPlan).toBeDefined();

    // List sessions
    const listRes = await request(app).get('/api/sessions').set('Authorization', VALID_AUTH);
    expect(listRes.status).toBe(200);
    expect(listRes.body.length).toBeGreaterThanOrEqual(1);

    // Get session by id
    const getRes = await request(app)
      .get(`/api/sessions/${sessionId}`)
      .set('Authorization', VALID_AUTH);
    expect(getRes.status).toBe(200);
    expect(getRes.body.id).toBe(sessionId);
  });

  it('returns 404 for non-existent session', async () => {
    const res = await request(app).get('/api/sessions/nonexistent').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(404);
  });

  it('returns 400 when creating session without required fields', async () => {
    const res = await request(app)
      .post('/api/sessions')
      .set('Authorization', VALID_AUTH)
      .send({ track: 'test' });
    expect(res.status).toBe(400);
  });

  it('GET /api/profile returns default profile', async () => {
    const res = await request(app).get('/api/profile').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe('default');
    expect(res.body.focusAreas).toBeDefined();
  });

  it('PUT /api/profile updates profile', async () => {
    const res = await request(app)
      .put('/api/profile')
      .set('Authorization', VALID_AUTH)
      .send({ targetCompany: 'Acme Corp', targetRole: 'Senior Engineer', focusAreas: ['system-design'] });
    expect(res.status).toBe(200);
    expect(res.body.targetCompany).toBe('Acme Corp');
    expect(res.body.targetRole).toBe('Senior Engineer');
  });

  it('POST /api/profile/resume stores resume text', async () => {
    const res = await request(app)
      .post('/api/profile/resume')
      .set('Authorization', VALID_AUTH)
      .send({ text: 'Experienced frontend engineer with React and Angular expertise.' });
    expect(res.status).toBe(200);
    expect(res.body.resumeText).toContain('frontend engineer');
  });

  it('POST /api/profile/jd stores job description text', async () => {
    const res = await request(app)
      .post('/api/profile/jd')
      .set('Authorization', VALID_AUTH)
      .send({ text: 'Looking for a senior engineer with system design experience.' });
    expect(res.status).toBe(200);
    expect(res.body.jobDescriptionText).toContain('senior engineer');
  });

  it('POST and GET /api/sessions/:id/readiness-report works', async () => {
    const createRes = await request(app)
      .post('/api/sessions')
      .set('Authorization', VALID_AUTH)
      .send({ track: 'senior-frontend', mode: 'coding', provider: 'mock' });
    const sessionId = createRes.body.id;

    await request(app)
      .post(`/api/sessions/${sessionId}/messages`)
      .set('Authorization', VALID_AUTH)
      .send({ content: 'I would use a hash set for O(1) lookups.' });

    await request(app)
      .post(`/api/sessions/${sessionId}/finish`)
      .set('Authorization', VALID_AUTH);

    const reportRes = await request(app)
      .post(`/api/sessions/${sessionId}/readiness-report`)
      .set('Authorization', VALID_AUTH);
    expect(reportRes.status).toBe(201);
    expect(reportRes.body.readinessScore).toBeGreaterThan(0);
    expect(reportRes.body.hireSignal).toBeDefined();
    expect(reportRes.body.strengths.length).toBeGreaterThan(0);
    expect(reportRes.body.weaknessMap.length).toBeGreaterThanOrEqual(3);
    expect(reportRes.body.sevenDayPlan.length).toBeGreaterThan(0);

    const getRes = await request(app)
      .get(`/api/sessions/${sessionId}/readiness-report`)
      .set('Authorization', VALID_AUTH);
    expect(getRes.status).toBe(200);
    expect(getRes.body.sessionId).toBe(sessionId);
  });

  it('STAR story CRUD lifecycle', async () => {
    const createRes = await request(app)
      .post('/api/star-stories')
      .set('Authorization', VALID_AUTH)
      .send({
        title: 'Led Angular migration',
        category: 'leadership',
        situation: 'Legacy jQuery app needed modernization.',
        task: 'Lead the migration to Angular.',
        action: 'Created migration plan, trained team, built shared components.',
        result: 'Reduced bug count by 40%, improved dev velocity.',
        metrics: '40% fewer bugs, 2x deployment frequency',
        tags: ['angular', 'migration', 'leadership'],
      });
    expect(createRes.status).toBe(201);
    expect(createRes.body.id).toBeDefined();
    expect(createRes.body.title).toBe('Led Angular migration');

    const storyId = createRes.body.id;

    const listRes = await request(app).get('/api/star-stories').set('Authorization', VALID_AUTH);
    expect(listRes.status).toBe(200);
    expect(listRes.body.length).toBeGreaterThanOrEqual(1);

    const getRes = await request(app)
      .get(`/api/star-stories/${storyId}`)
      .set('Authorization', VALID_AUTH);
    expect(getRes.status).toBe(200);
    expect(getRes.body.title).toBe('Led Angular migration');

    const updateRes = await request(app)
      .put(`/api/star-stories/${storyId}`)
      .set('Authorization', VALID_AUTH)
      .send({ title: 'Led Angular 17 migration' });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.title).toBe('Led Angular 17 migration');

    const deleteRes = await request(app)
      .delete(`/api/star-stories/${storyId}`)
      .set('Authorization', VALID_AUTH);
    expect(deleteRes.status).toBe(204);

    const verifyRes = await request(app)
      .get(`/api/star-stories/${storyId}`)
      .set('Authorization', VALID_AUTH);
    expect(verifyRes.status).toBe(404);
  });

  it('GET /api/dashboard/summary returns summary', async () => {
    const res = await request(app).get('/api/dashboard/summary').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.totalSessions).toBeDefined();
    expect(typeof res.body.totalSessions).toBe('number');
    expect(res.body.sessionsByMode).toBeDefined();
    expect(res.body.recommendedNextMode).toBeDefined();
  });

  it('GET /api/sessions/:id/export/markdown returns markdown', async () => {
    const createRes = await request(app)
      .post('/api/sessions')
      .set('Authorization', VALID_AUTH)
      .send({ track: 'senior-frontend', mode: 'behavioral', provider: 'mock' });
    const sessionId = createRes.body.id;

    const res = await request(app)
      .get(`/api/sessions/${sessionId}/export/markdown`)
      .set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('text/markdown');
    expect(res.text).toContain('# Interview Practice Session');
    expect(res.text).toContain('behavioral');
  });

  it('GET /api/sessions/:id/export/html returns html', async () => {
    const createRes = await request(app)
      .post('/api/sessions')
      .set('Authorization', VALID_AUTH)
      .send({ track: 'senior-frontend', mode: 'behavioral', provider: 'mock' });
    const sessionId = createRes.body.id;

    const res = await request(app)
      .get(`/api/sessions/${sessionId}/export/html`)
      .set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('text/html');
    expect(res.text).toContain('<!DOCTYPE html>');
    expect(res.text).toContain('InterviewOps Studio');
  });

  it('GET /api/resumes returns all 10 tailored resumes', async () => {
    const res = await request(app).get('/api/resumes').set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(10);
    const javaResumes = res.body.filter((r: { category: string }) => r.category === 'Java');
    const pythonResumes = res.body.filter((r: { category: string }) => r.category === 'Python & AI');
    expect(javaResumes).toHaveLength(4);
    expect(pythonResumes).toHaveLength(6);
  });

  it('GET /api/resumes/:id returns specific resume', async () => {
    const res = await request(app)
      .get('/api/resumes/java-fintech-distributed')
      .set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe('java-fintech-distributed');
    expect(res.body.role).toContain('Java');
    expect(res.body.fullText).toBeDefined();
  });

  it('POST /api/resumes/:id/select updates profile with resume details', async () => {
    const res = await request(app)
      .post('/api/resumes/python-ai-platform/select')
      .set('Authorization', VALID_AUTH);
    expect(res.status).toBe(200);
    expect(res.body.activeResume.id).toBe('python-ai-platform');
    expect(res.body.profile.targetRole).toContain('Python');

    const profileRes = await request(app).get('/api/profile').set('Authorization', VALID_AUTH);
    expect(profileRes.body.targetRole).toContain('Python');
  });
});

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { requireAuth } from './middleware/auth.middleware.js';
import { securityHeaders, rateLimiter } from './middleware/security.middleware.js';

import healthRoutes from './routes/health.routes.js';
import tracksRoutes from './routes/tracks.routes.js';
import modesRoutes from './routes/modes.routes.js';
import providersRoutes from './routes/providers.routes.js';
import sessionsRoutes from './routes/sessions.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import profileRoutes from './routes/profile.routes.js';
import reportsRoutes from './routes/reports.routes.js';
import starStoriesRoutes from './routes/star-stories.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import exportRoutes from './routes/export.routes.js';
import plansRoutes from './routes/plans.routes.js';
import premiumPacksRoutes from './routes/premium-packs.routes.js';
import resumesRoutes from './routes/resumes.routes.js';

const app = express();

// Disable information disclosure headers
app.disable('x-powered-by');

// High-security headers & Rate limiting
app.use(securityHeaders);
app.use(rateLimiter);

// Strict CORS policy
const allowedOrigins = [
  'https://ashish-ranjan.cloud',
  'http://localhost:4200',
  'http://127.0.0.1:4200',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '2mb' }));

// ── ENFORCE AUTHENTICATION ON EVERY API ENDPOINT ─────────────
app.use('/api', requireAuth);

// Routes
app.use('/api', healthRoutes);
app.use('/api', tracksRoutes);
app.use('/api', modesRoutes);
app.use('/api', providersRoutes);
app.use('/api', sessionsRoutes);
app.use('/api', messagesRoutes);
app.use('/api', profileRoutes);
app.use('/api', reportsRoutes);
app.use('/api', starStoriesRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', exportRoutes);
app.use('/api', plansRoutes);
app.use('/api', premiumPacksRoutes);
app.use('/api', resumesRoutes);

const PORT = 4317;

if (process.env['NODE_ENV'] !== 'test') {
  // Bind strictly to 127.0.0.1 loopback to prevent external network bypass
  app.listen(PORT, '127.0.0.1', () => {
    console.log(`InterviewOps Secure Studio API running at http://127.0.0.1:${PORT}`);
  });
}

export default app;

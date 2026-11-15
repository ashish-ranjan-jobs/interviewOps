import { Router } from 'express';

const router = Router();

const providers = [
  {
    id: 'gemini',
    name: 'Google Gemini',
    icon: '✨',
    badge: 'Active & Recommended',
    description: 'Powered by Google Gemini 3.5. Calibrated for multi-turn technical probing, system design, and rubric scoring.',
    requiresKey: false, // Pre-configured on this server!
    keyEnvVar: 'GEMINI_API_KEY',
    docsUrl: 'https://aistudio.google.com/app/apikey',
    models: [
      { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash Lite — Fast & Sharp', recommended: true },
      { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash — High Capability' },
      { id: 'gemini-pro-latest', name: 'Gemini Pro — Deep Reasoning' },
    ],
    setupSteps: [
      'Gemini is pre-configured and ready to run on this server.',
      'To provide your own custom key, set GEMINI_API_KEY in studio-api/.env',
    ],
  },
  {
    id: 'mock',
    name: 'Mock Interviewer',
    icon: '🤖',
    badge: 'Offline',
    description: 'Fast offline practice interviewer. Generates deterministic structured questions without external API calls.',
    requiresKey: false,
    models: [
      { id: 'mock-default', name: 'Mock Engine v1', recommended: true },
    ],
    setupSteps: [],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    icon: '⚡',
    badge: 'GPT-4o',
    description: 'Powered by OpenAI GPT-4o for system architecture and coding evaluation.',
    requiresKey: true,
    keyEnvVar: 'OPENAI_API_KEY',
    docsUrl: 'https://platform.openai.com/api-keys',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o', recommended: true },
      { id: 'gpt-4o-mini', name: 'GPT-4o mini' },
    ],
    setupSteps: [
      'Provide OPENAI_API_KEY in studio-api/.env',
    ],
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    icon: '🧠',
    badge: 'Claude',
    description: 'Powered by Claude 3.5 for nuanced architectural discussions and long context.',
    requiresKey: true,
    keyEnvVar: 'ANTHROPIC_API_KEY',
    docsUrl: 'https://console.anthropic.com/settings/keys',
    models: [
      { id: 'claude-3-5-sonnet-latest', name: 'Claude 3.5 Sonnet', recommended: true },
    ],
    setupSteps: [
      'Provide ANTHROPIC_API_KEY in studio-api/.env',
    ],
  },
];

router.get('/providers', (_req, res) => {
  res.json(providers);
});

export default router;

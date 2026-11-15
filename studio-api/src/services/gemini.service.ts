import type {
  InterviewSession,
  InterviewScorecard,
  StudyPlan,
  CandidateProfile,
} from '../models/studio.models.js';

interface GeminiContentPart {
  text: string;
}

interface GeminiContentMessage {
  role: 'user' | 'model';
  parts: GeminiContentPart[];
}

export function isGeminiAvailable(): boolean {
  const key = process.env['GEMINI_API_KEY'];
  return Boolean(key && key.trim().length > 0);
}

function getGeminiModel(sessionModel?: string): string {
  if (sessionModel && sessionModel.startsWith('gemini-')) {
    return sessionModel;
  }
  return process.env['GEMINI_MODEL'] ?? 'gemini-3.5-flash-lite';
}

async function callGeminiApi(
  systemInstruction: string,
  contents: GeminiContentMessage[],
  modelName: string,
  temperature = 0.5,
  maxOutputTokens = 2048
): Promise<string> {
  const apiKey = process.env['GEMINI_API_KEY'];
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const payload: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens,
    },
  };

  if (systemInstruction) {
    payload['systemInstruction'] = {
      parts: [{ text: systemInstruction }],
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text: string }>;
      };
    }>;
  };

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini API returned an empty response');
  }

  return text.trim();
}

export async function generateGeminiOpening(
  session: InterviewSession,
  profile?: CandidateProfile
): Promise<string> {
  const modelName = getGeminiModel(session.model);
  const systemPrompt = `You are an elite Principal Backend Engineer and Bar Raiser conducting a technical mock interview.
Role Track: ${session.track}
Interview Mode: ${session.mode}
${profile?.focusAreas?.length ? `Candidate Focus Areas: ${profile.focusAreas.join(', ')}` : ''}
${profile?.targetRole ? `Candidate Target Role: ${profile.targetRole}` : ''}
${profile?.seniorityLevel ? `Candidate Seniority Level: ${profile.seniorityLevel}` : ''}
${profile?.resumeText ? `\n--- Candidate Resume Background ---\n${profile.resumeText.slice(0, 2000)}\n---` : ''}

Instructions:
1. Provide a sharp, engaging opening interview question calibrated for a ${session.track} candidate in ${session.mode} mode.
2. If candidate resume context is provided, you may anchor the opening scenario in their actual production domains (e.g. high-throughput payment switches, event-streaming with Kafka, Redis vector search, or distributed microservices) to test their architectural ownership.
3. Focus on real-world engineering: distributed systems, concurrency, database performance, caching, messaging, or fault tolerance.
4. Be professional, direct, and supportive. Do not include meta-commentary. Ask the question directly. Keep it under 140 words.`;

  const contents: GeminiContentMessage[] = [
    {
      role: 'user',
      parts: [
        {
          text: `Please give me the opening question for my ${session.mode} interview for the ${session.track} role.`,
        },
      ],
    },
  ];

  return await callGeminiApi(systemPrompt, contents, modelName, 0.4, 1024);
}

export async function generateGeminiFollowUp(
  session: InterviewSession,
  candidateMessage: string,
  profile?: CandidateProfile
): Promise<string> {
  const modelName = getGeminiModel(session.model);
  const systemPrompt = `You are a Principal Backend Engineer and Bar Raiser interviewer conducting an interactive mock interview.
Role Track: ${session.track}
Mode: ${session.mode}
${profile?.targetRole ? `Candidate Target: ${profile.targetRole}` : ''}
${profile?.resumeText ? `\n--- Candidate Resume Context ---\n${profile.resumeText.slice(0, 1800)}\n---` : ''}

Your behavior:
1. Carefully assess the candidate's technical response for depth, correctness, database/network implications, and architectural tradeoffs.
2. Acknowledge valid points briefly (1-2 sentences).
3. Probe deeply into technical trade-offs (e.g. database isolation levels, lock contention, cache stampedes, partition splits, async failure reconciliation).
4. If they reference architectures from their background (e.g. Airtel, Dolcera, Kafka, Redis, PostgreSQL, Spring Boot), challenge them to defend their numbers and design decisions.
5. Keep your reply concise (100–180 words maximum), direct, and conversational.`;

  const contents: GeminiContentMessage[] = [];

  // Build conversation history from existing interviewer/candidate messages
  for (const msg of session.messages) {
    if (msg.role === 'interviewer') {
      contents.push({ role: 'model', parts: [{ text: msg.content }] });
    } else if (msg.role === 'candidate') {
      contents.push({ role: 'user', parts: [{ text: msg.content }] });
    }
  }

  // Ensure last candidate message is present
  const lastMsg = contents[contents.length - 1];
  if (!lastMsg || lastMsg.role !== 'user' || lastMsg.parts[0]?.text !== candidateMessage) {
    contents.push({ role: 'user', parts: [{ text: candidateMessage }] });
  }

  return await callGeminiApi(systemPrompt, contents, modelName, 0.5, 1024);
}

export async function generateGeminiSummary(
  session: InterviewSession
): Promise<{
  scorecard: InterviewScorecard;
  studyPlan: StudyPlan;
  coachFeedback: string;
}> {
  const modelName = getGeminiModel(session.model);
  const transcript = session.messages
    .filter((m) => m.role === 'candidate' || m.role === 'interviewer')
    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
    .join('\n\n');

  const systemPrompt = `You are a Principal Backend Engineering Bar Raiser evaluating a completed mock interview session.
Analyze the candidate's performance across 5 backend dimensions:
1. System Architecture & Scalability
2. Database Engineering & Caching
3. API Design & Data Contracts
4. Concurrency & Fault Tolerance
5. Problem Solving & Communication

You must return valid JSON strictly adhering to this structure:
{
  "hireSignal": "Strong Hire" | "Hire" | "Lean Hire" | "Lean No Hire" | "No Hire",
  "overallScore": number (1-5 scale, e.g. 4.2),
  "dimensions": [
    { "name": string, "score": number (1-5), "feedback": string },
    ...5 dimensions
  ],
  "coachFeedback": string,
  "sevenDayPlan": [
    "Day 1: ...",
    "Day 2: ...",
    "Day 3: ...",
    "Day 4: ...",
    "Day 5: ...",
    "Day 6: ...",
    "Day 7: ..."
  ],
  "fourteenDayPlan": [
    "Week 1: ...",
    "Week 2: ..."
  ]
}
Return only the JSON object, without markdown quotes or formatting.`;

  const contents: GeminiContentMessage[] = [
    {
      role: 'user',
      parts: [
        {
          text: `Evaluate this ${session.track} interview transcript in ${session.mode} mode:\n\n${transcript.slice(0, 8000)}`,
        },
      ],
    },
  ];

  try {
    const raw = await callGeminiApi(systemPrompt, contents, modelName, 0.3, 3000);
    const cleaned = raw.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(cleaned);

    const dims = Array.isArray(parsed.dimensions) ? parsed.dimensions : [
      { name: 'System Architecture', score: 4, feedback: 'Structured component breakdown and good scale awareness.' },
      { name: 'Database & Caching', score: 4, feedback: 'Strong awareness of indexing and cache-aside patterns.' },
      { name: 'API Design', score: 4, feedback: 'Clear REST/gRPC conventions and error handling.' },
      { name: 'Concurrency & Resilience', score: 3, feedback: 'Good basics, could dive deeper into race conditions.' },
      { name: 'Communication', score: 4, feedback: 'Clear, concise explanations of technical tradeoffs.' },
    ];

    const scorecard: InterviewScorecard = {
      overallScore: Number(parsed.overallScore) || 3.8,
      maxScore: dims.length * 5,
      hireSignal: parsed.hireSignal ?? 'Hire',
      dimensions: dims,
    };

    const studyPlan: StudyPlan = {
      sevenDayPlan: Array.isArray(parsed.sevenDayPlan) ? parsed.sevenDayPlan : [
        'Day 1: Review database indexing (B-Trees, composite keys, EXPLAIN ANALYZE)',
        'Day 2: Master transaction isolation levels (ACID, Repeatable Read, Serializable)',
        'Day 3: Implement cache stampede prevention and distributed caching with Redis',
        'Day 4: Study message brokers, consumer groups, and idempotency (Kafka/RabbitMQ)',
        'Day 5: Practice concurrency, thread safety, and distributed locks (Redlock)',
        'Day 6: Design resilient APIs: Idempotency-Key, circuit breakers, RFC 7807',
        'Day 7: Mock interview drill: full 45-min backend system design simulation',
      ],
      fourteenDayPlan: Array.isArray(parsed.fourteenDayPlan) ? parsed.fourteenDayPlan : [
        'Week 1: Foundation — Master database internals, caching topologies, API idempotency, and concurrency patterns. Complete 5 low-level design drills.',
        'Week 2: Advanced Distributed Systems — Model Saga transactions, database sharding with zero downtime, and execute 3 full-scale bar-raiser mock interviews.',
      ],
    };

    return {
      scorecard,
      studyPlan,
      coachFeedback: parsed.coachFeedback ?? 'Impressive backend practice session! Review your scorecard and tailored 2-week roadmap below to solidify your technical edge.',
    };
  } catch (err) {
    console.error('Gemini summary parsing error, fallback to default:', err);
    throw err;
  }
}

import { z } from 'zod';

export const ProjectConfigSchema = z.object({
  name: z.string().default('My Interview Prep'),
  default_track: z.string().default('backend-developer'),
  default_mode: z.string().default('system-design'),
  output_dir: z.string().default('output/sessions'),
  input_dir: z.string().default('input'),
});

export const ModelConfigSchema = z.object({
  provider: z.string().default('gemini'),
  temperature: z.number().min(0).max(2).default(0.4),
  max_tokens: z.number().positive().default(6000),
});

export const InterviewConfigSchema = z.object({
  duration_minutes: z.number().positive().default(45),
  difficulty: z.string().default('senior'),
  style: z.string().default('realistic'),
  include_followups: z.boolean().default(true),
  include_scorecard: z.boolean().default(true),
  include_improved_answers: z.boolean().default(true),
  include_study_plan: z.boolean().default(true),
});

export const FeedbackConfigSchema = z.object({
  tone: z.string().default('honest, practical, supportive'),
  rubric_scale: z.number().default(5),
  include_hire_signal: z.boolean().default(true),
  include_senior_expectations: z.boolean().default(true),
});

export const EthicsConfigSchema = z.object({
  practice_only: z.boolean().default(true),
  block_live_cheating_features: z.boolean().default(true),
  include_ethics_notice: z.boolean().default(true),
  no_hidden_overlay: z.boolean().default(true),
  no_real_time_answer_injection: z.boolean().default(true),
});

export const TracksConfigSchema = z.object({
  enabled: z
    .array(z.string())
    .default(['backend-developer', 'senior-backend', 'senior-frontend', 'angular-developer', 'ai-agentic-engineer']),
});

export const ModesConfigSchema = z.object({
  enabled: z
    .array(z.string())
    .default(['system-design', 'backend-architecture', 'behavioral', 'coding', 'project-deep-dive']),
});

export const InterviewOpsConfigSchema = z.object({
  project: ProjectConfigSchema.default({
    name: 'My Interview Prep',
    default_track: 'backend-developer',
    default_mode: 'system-design',
    output_dir: 'output/sessions',
    input_dir: 'input',
  }),
  model: ModelConfigSchema.default({
    provider: 'gemini',
    temperature: 0.4,
    max_tokens: 6000,
  }),
  interview: InterviewConfigSchema.default({
    duration_minutes: 45,
    difficulty: 'senior',
    style: 'realistic',
    include_followups: true,
    include_scorecard: true,
    include_improved_answers: true,
    include_study_plan: true,
  }),
  feedback: FeedbackConfigSchema.default({
    tone: 'honest, practical, supportive',
    rubric_scale: 5,
    include_hire_signal: true,
    include_senior_expectations: true,
  }),
  ethics: EthicsConfigSchema.default({
    practice_only: true,
    block_live_cheating_features: true,
    include_ethics_notice: true,
    no_hidden_overlay: true,
    no_real_time_answer_injection: true,
  }),
  tracks: TracksConfigSchema.default({
    enabled: ['backend-developer', 'senior-backend', 'senior-frontend', 'angular-developer', 'ai-agentic-engineer'],
  }),
  modes: ModesConfigSchema.default({
    enabled: ['system-design', 'backend-architecture', 'behavioral', 'coding', 'project-deep-dive'],
  }),
});

export type InterviewOpsConfig = z.infer<typeof InterviewOpsConfigSchema>;
export type ProjectConfig = z.infer<typeof ProjectConfigSchema>;
export type ModelConfig = z.infer<typeof ModelConfigSchema>;
export type InterviewConfig = z.infer<typeof InterviewConfigSchema>;
export type FeedbackConfig = z.infer<typeof FeedbackConfigSchema>;
export type EthicsConfig = z.infer<typeof EthicsConfigSchema>;

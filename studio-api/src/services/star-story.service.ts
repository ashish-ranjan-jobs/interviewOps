import { v4 as uuidv4 } from 'uuid';
import { join } from 'node:path';
import type { StarStory } from '../models/studio.models.js';
import { FileStore } from './file-store.service.js';

const dataDir = join(process.cwd(), '.interviewops-studio', 'star-stories');
const store = new FileStore<StarStory>(dataDir);

const SEED_STORIES: Omit<StarStory, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Airtel AI Platform: Scaling to 3,500+ RPS Across 14 Countries',
    category: 'leadership',
    situation: 'At Airtel International, our AI-driven customer support bot needed to serve 14 African countries (~200M subscriber base) with massive peak concurrency.',
    task: 'Architect and own high-throughput Python backend microservices sustaining peak traffic of 3,500+ requests/sec at 99.9% uptime with sub-400ms p95 latency.',
    action: 'Engineered distributed event-streaming pipelines with Apache Kafka partitioned by conversation ID, coordinating Redis conversational state and FastAPI SSE streaming for ~6M conversations.',
    result: 'Achieved a 42% automated ticket deflection rate, sustained 99.9% uptime across all 14 markets, and delivered sub-400ms p95 response times.',
    metrics: '3,500+ RPS, ~6M conversations, 42% deflection rate, 99.9% uptime, sub-400ms p95',
    tags: ['Python', 'FastAPI', 'Kafka', 'Redis', 'High-Throughput', 'Airtel'],
  },
  {
    title: 'Redis Vector Search: Slashing LLM Inference Costs by 64%',
    category: 'impact',
    situation: 'Rapidly growing traffic to the AI support platform led to escalating third-party LLM API expenses with many redundant inquiries.',
    task: 'Drastically reduce LLM API spend while preserving response accuracy and maintaining fast response latency.',
    action: 'Designed and deployed an intelligent semantic similarity caching layer using Redis Vector Search with a 0.88 cosine similarity threshold and automated cache warming.',
    result: 'Achieved an 82% cache hit rate for common telecom support workflows, slashing LLM inference costs by 64% ($180K+/year savings).',
    metrics: '64% ($180K+/yr) cost reduction, 82% cache hit rate, 0.88 cosine threshold',
    tags: ['GenAI', 'Redis Vector Search', 'Embeddings', 'Cost Optimization', 'Python'],
  },
  {
    title: 'Java Off-Heap Memory Leak & HikariCP Pool Starvation Triage',
    category: 'technical-depth',
    situation: 'In Airtel Africa Payment Bank notification middleware, production containers were experiencing intermittent out-of-memory crashes and severe p99 latency spikes.',
    task: 'Diagnose the root cause of off-heap bloat and eliminate database connection pool starvation under 350 TPS peak loads.',
    action: 'Profiled the JVM using async-profiler and Native Memory Tracking (NMT) to pinpoint unpooled Netty direct byte buffers. Simultaneously refactored thread-pool boundaries to isolate network I/O from database transactions, preventing HikariCP exhaustion.',
    result: 'Slashed container pod footprint by 50% (from 8 GB down to 4 GB), stabilized p99 latency below 120ms, and achieved a 99.9% monthly availability SLO.',
    metrics: '50% pod memory reduction (8GB to 4GB), p99 < 120ms, 99.9% SLO, 350 TPS',
    tags: ['Java 21', 'Spring Boot 3', 'JVM Profiling', 'async-profiler', 'HikariCP', 'PostgreSQL'],
  },
  {
    title: 'Double-Debit Race Condition Elimination via Redis Lua Locks & Sagas',
    category: 'ownership',
    situation: 'Concurrent payment callbacks across distributed banking switch pods introduced risk of race conditions and duplicate account debits.',
    task: 'Ensure absolute atomic debit guarantees across multiple pods without degrading overall transaction throughput.',
    action: 'Implemented multi-layer concurrency control combining Redis distributed locks (SETNX PX + atomic Lua release) with primary DB row-level routing. Orchestrated multi-step distributed payments via Spring State Machine Sagas.',
    result: 'Completely eliminated double-debit races in production, sustaining 350 peak TPS with 99.9% availability.',
    metrics: 'Zero double-debit incidents, 350 peak TPS, 99.9% availability SLO',
    tags: ['Java 21', 'Spring State Machine', 'Redis Distributed Lock', 'Saga Pattern', 'Fintech'],
  },
  {
    title: 'Spring Batch End-of-Day Settlement Optimization',
    category: 'technical-depth',
    situation: 'End-of-day merchant disbursements and bank reconciliations were taking hours, approaching critical banking cutoff SLAs.',
    task: 'Accelerate the batch settlement engine to process multi-million daily transaction records well within SLA limits.',
    action: 'Re-architected the batch pipeline using Spring Batch range partitioning with JdbcPagingItemReader, PostgreSQL table partition pruning, and skip listeners for poison-pill transactions.',
    result: 'Reduced overall EOD batch runtime by 4x, settling millions of records reliably within tight SLA windows.',
    metrics: '4x batch runtime speedup, multi-million records settled daily',
    tags: ['Spring Batch', 'PostgreSQL', 'Partition Pruning', 'Java', 'Batch Processing'],
  },
];

export async function getAllStories(): Promise<StarStory[]> {
  let stories = await store.getAll();
  if (stories.length === 0) {
    for (const seed of SEED_STORIES) {
      await createStory(seed);
    }
    stories = await store.getAll();
  }
  return stories.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function getStory(id: string): Promise<StarStory | undefined> {
  return store.get(id);
}

export async function createStory(
  data: Omit<StarStory, 'id' | 'createdAt' | 'updatedAt'>
): Promise<StarStory> {
  const now = new Date().toISOString();
  const story: StarStory = {
    ...data,
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,
  };
  await store.save(story);
  return story;
}

export async function updateStory(
  id: string,
  updates: Partial<StarStory>
): Promise<StarStory | undefined> {
  const existing = await store.get(id);
  if (!existing) return undefined;

  const updated: StarStory = {
    ...existing,
    ...updates,
    id,
    updatedAt: new Date().toISOString(),
  };
  await store.save(updated);
  return updated;
}

export async function deleteStory(id: string): Promise<boolean> {
  const existing = await store.get(id);
  if (!existing) return false;
  await store.delete(id);
  return true;
}

import { Router } from 'express';

const router = Router();

const modes = [
  // ── High-Impact Backend & AI Interview Modes ───────────────
  {
    id: 'system-design',
    name: 'System Design & Scalability',
    icon: '🏗️',
    description: 'Large-scale distributed system design, high availability (99.9%), capacity planning, and architectural trade-offs.',
  },
  {
    id: 'backend-architecture',
    name: 'Backend Architecture & Microservices',
    icon: '⚙️',
    description: 'Microservices orchestration, event-driven design, caching hierarchies, and fault-tolerant server backends.',
  },
  {
    id: 'concurrency',
    name: 'Concurrency & Multithreading',
    icon: '🔀',
    description: 'Thread pools, async event loops (asyncio), race conditions, deadlocks, and distributed locks (Redis SETNX + Lua).',
  },
  {
    id: 'sql-databases',
    name: 'SQL & Database Internals',
    icon: '🗄️',
    description: 'ACID transactions, isolation levels, B-tree indexing, query optimization, connection pool starvation (HikariCP/asyncpg).',
  },
  {
    id: 'distributed-systems',
    name: 'Distributed Systems & Sagas',
    icon: '🌐',
    description: 'CAP theorem, consensus, Saga pattern, outbox pattern, distributed transactions, and data consistency models.',
  },
  {
    id: 'event-driven-architecture',
    name: 'Kafka & Event Streaming',
    icon: '⚡',
    description: 'Apache Kafka partitioning, consumer groups, rebalances, idempotency, backpressure, and dead-letter queues (DLQs).',
  },
  {
    id: 'agentic-design',
    name: 'GenAI & Multi-Agent Workflows',
    icon: '🧠',
    description: 'Stateful LangGraph multi-agent orchestration, cyclical reflection loops, dynamic tool calling, and guardrails.',
  },
  {
    id: 'llm-design',
    name: 'Hybrid RAG & Semantic Caching',
    icon: '🔮',
    description: 'Multilingual Hybrid RAG (dense + BM25 + RRF), Redis Vector Search semantic similarity caching, and RAGAS evaluation.',
  },
  {
    id: 'performance-engineering',
    name: 'Performance Profiling & Optimization',
    icon: '🚀',
    description: 'JVM profiling (async-profiler, NMT), p99 latency reduction, off-heap memory leak triage, and batch processing tuning.',
  },
  {
    id: 'coding',
    name: 'Coding & Algorithms (LeetCode)',
    icon: '💻',
    description: 'Algorithmic problem-solving, data structures, rate limiters, LRU/LFU caches, and high-performance backend logic.',
  },
  {
    id: 'api-design',
    name: 'API Design & Data Contracts',
    icon: '🔌',
    description: 'RESTful microservices, Server-Sent Events (SSE) streaming, OpenAPI specs, idempotency keys, and protocol design.',
  },
  {
    id: 'behavioral',
    name: 'Behavioral (STAR - Real Experience)',
    icon: '🗣️',
    description: 'Production outages, cross-team technical leadership, architectural disagreements, and high-impact project delivery.',
  },
  {
    id: 'code-review',
    name: 'Code Review & Incident Post-Mortem',
    icon: '🔍',
    description: 'Reviewing complex concurrent code for bugs, diagnosing production outages, and writing blameless post-mortems.',
  },
  {
    id: 'debugging',
    name: 'Root Cause Analysis & Debugging',
    icon: '🐛',
    description: 'Systematic diagnosis of production anomalies, thread dumps, memory leaks, and distributed tracing.',
  },
];

router.get('/modes', (_req, res) => {
  res.json(modes);
});

export default router;

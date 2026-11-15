import { Router } from 'express';

const router = Router();

const tracks = [
  // ── Ashish Ranjan 10-Track Resume Suite ────────────────────
  // Java Tracks (4)
  {
    id: 'java-fintech-distributed',
    name: 'Java Fintech & Distributed Systems',
    icon: '💳',
    description: 'Java 21, Spring Boot 3, Kafka, Redis distributed locks, Sagas, p99 < 110ms, 350 TPS.',
  },
  {
    id: 'java-microservices-cloud',
    name: 'Java Microservices & Cloud Platform',
    icon: '☁️',
    description: 'Enterprise SaaS, Spring Cloud, Resilience4j, AWS EKS, Hibernate/JPA query tuning.',
  },
  {
    id: 'java-enterprise-ai',
    name: 'Java & Enterprise AI Platform',
    icon: '🔮',
    description: 'Spring Boot 3 AI gateway, Python/FastAPI workers, Redis Vector Search, SSE streaming.',
  },
  {
    id: 'java-fullstack-react',
    name: 'Java Full Stack (React + Spring Boot)',
    icon: '⚛️',
    description: 'React.js, Next.js, TypeScript, Spring Boot 3, REST APIs, 1,111+ LeetCode problems.',
  },

  // Python & AI Tracks (6)
  {
    id: 'python-ai-platform',
    name: 'Python & AI Platform Engineer',
    icon: '🐍',
    description: 'FastAPI, asyncio, Kafka, LangGraph, Redis Vector Search, 3,500+ RPS, 64% cost reduction.',
  },
  {
    id: 'python-backend-platform',
    name: 'Python Backend & Platform',
    icon: '⚡',
    description: 'Asyncio microservices, PostgreSQL query optimization, Redis caching, 3,500+ RPS.',
  },
  {
    id: 'genai-llm-agentic',
    name: 'GenAI, LLM & Agentic AI Engineer',
    icon: '🧠',
    description: 'LangGraph multi-agent workflows, Hybrid RAG, Redis Vector Search, RAGAS evaluation.',
  },
  {
    id: 'applied-ml-inference',
    name: 'Applied ML & Inference Engineer',
    icon: '🚀',
    description: 'vLLM, Triton, continuous batching, latency reduction (320ms to 175ms), GPU tuning.',
  },
  {
    id: 'fullstack-ai-web',
    name: 'Full Stack AI Web Developer',
    icon: '🌐',
    description: 'FastAPI + Next.js/React, SSE token streaming, generative UI, AI developer tooling.',
  },
  {
    id: 'ai-infra-mlops',
    name: 'AI Infrastructure & MLOps Engineer',
    icon: '🏭',
    description: 'Kubernetes (AWS EKS), GPU node provisioning, Prometheus, OpenTelemetry, 99.9% uptime.',
  },

  // ── Core Backend Engineering ──────────────────────────────
  {
    id: 'backend-developer',
    name: 'Backend Developer',
    icon: '⚙️',
    description: 'REST/gRPC APIs, database indexing, caching, queues, and distributed architecture.',
  },
  {
    id: 'senior-backend',
    name: 'Senior Backend Engineer',
    icon: '🏗️',
    description: 'Large-scale distributed systems, high concurrency, database scaling, and zero-downtime migrations.',
  },
  {
    id: 'distributed-systems',
    name: 'Distributed Systems Architect',
    icon: '🌐',
    description: 'Consensus protocols, event sourcing, Saga pattern, CQRS, and fault tolerance.',
  },
];

router.get('/tracks', (_req, res) => {
  res.json(tracks);
});

export default router;

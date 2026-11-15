# Master Python & AI Platform Engineer Track

## Who This Is For
Principal and Senior Python engineers architecting high-scale distributed AI platforms, asynchronous microservices, multilingual Hybrid RAG, and multi-agent orchestration.

## Expected Skills
- Python 3.12+, FastAPI, asyncio, uvloop, asynchronous I/O architectures
- Apache Kafka (partitioned event streaming, consumer group management, backpressure)
- LangGraph (stateful multi-agent graphs, cyclical agentic workflows, human-in-the-loop)
- Redis Vector Search (HNSW indexes, semantic similarity caching, 0.88 cosine threshold)
- Multilingual Hybrid RAG (dense vector retrieval + BM25 sparse keyword search, Cross-Encoder reranking)
- PostgreSQL, Redis conversational state, AWS EKS, Prometheus, Grafana, RAGAS evaluation

## Interview Focus Areas
1. Sustaining 3,500+ requests/sec across 14 countries at 99.9% uptime with sub-400ms p95 latency
2. Slashing LLM inference spend by 64% ($180K+/year) via Redis semantic caching (82% hit rate)
3. Automated support ticket deflection (42% rate across ~6M conversations)
4. Evaluating RAG accuracy with RAGAS (faithfulness, answer relevancy, context precision)

## Key Production Interview Questions
- At Airtel International, you sustained 3,500+ RPS across 14 countries. Walk me through your asyncio event loop architecture and Kafka partitioning strategy.
- How did you achieve a 64% cost reduction with Redis Vector Search semantic caching? How did you tune the 0.88 cosine similarity threshold and handle cache invalidation?
- Explain your multilingual Hybrid RAG pipeline combining dense vector embeddings with BM25 keyword search. How did you evaluate Recall@10 with RAGAS?
- Walk me through a complex multi-agent system you built with LangGraph. How did you manage state persistence, tool calling failures, and cycle termination?

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

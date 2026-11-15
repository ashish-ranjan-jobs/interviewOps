# Senior Python Backend & Platform Engineer Track

## Who This Is For
Senior backend engineers building mission-critical async microservices, high-throughput distributed APIs, database optimizations, and cloud infrastructure.

## Expected Skills
- Python 3.12, FastAPI, asyncio, aiohttp, Starlette
- PostgreSQL query tuning (EXPLAIN ANALYZE, composite indexes, connection pooling with asyncpg)
- Redis (distributed caching, Lua scripts, pub/sub, rate limiters)
- Apache Kafka event-driven architecture, distributed locks, idempotency
- Docker, Kubernetes (AWS EKS), CI/CD, structured JSON logging, OpenTelemetry

## Interview Focus Areas
1. High-throughput asynchronous I/O scaling to 3,500+ RPS with sub-50ms read latencies
2. Database query optimization reducing p95 latency by 45%
3. Distributed rate limiting and token bucket algorithms for API protection
4. Idempotency keys and transactional outbox patterns for reliable event publishing

## Key Production Interview Questions
- How does FastAPI with asyncio handle thousands of concurrent I/O connections compared to traditional WSGI servers like Gunicorn with sync workers?
- How do you diagnose and optimize a slow query in PostgreSQL that is causing connection pool exhaustion under high traffic?
- Walk me through implementing an atomic distributed rate limiter using Redis and Lua scripts.
- How do you design a reliable event publishing pipeline using the Transactional Outbox pattern with PostgreSQL and Kafka in Python?

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

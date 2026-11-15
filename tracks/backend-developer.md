# Backend Developer Track

## Who This Is For
Backend engineers (Mid, Senior, Staff) building high-throughput, fault-tolerant, scalable server-side systems, REST/gRPC/GraphQL APIs, microservices, and distributed data pipelines.

## Expected Skills
- **API Design & Protocols**: RESTful conventions, idempotency keys, versioning, gRPC/Protobuf, WebSockets, GraphQL, error contracts (RFC 7807)
- **Database Engineering**: 
  - Relational (PostgreSQL, MySQL): ACID transactions, transaction isolation levels (Read Committed, Repeatable Read, Serializable), indexing (B-Tree, Hash, GIN, GiST), composite indices, query optimization, EXPLAIN ANALYZE
  - NoSQL & Key-Value: Redis, DynamoDB, MongoDB, Cassandra, wide-column vs document stores
  - Data modeling, migration strategies with zero downtime, partitioning and sharding
- **Caching & Memory Management**: Cache-aside, write-through, write-behind, cache invalidation strategies, handling cache stampede/thundering herd, Redis data structures (Strings, Hashes, Sorted Sets, HyperLogLog, Streams)
- **Asynchronous Architecture & Messaging**: Message queues and streaming platforms (Kafka, RabbitMQ, SQS), at-least-once vs exactly-once semantics, consumer lag, backpressure, dead-letter queues
- **Concurrency & Multithreading**: Thread safety, race conditions, mutexes, reader-writer locks, optimistic vs pessimistic locking, distributed locks (Redlock), async event-loops (Node.js/Python asyncio) vs thread pools (Java/Go)
- **Distributed Systems Fundamentals**: CAP theorem, PACELC, event-driven architecture, distributed transactions (Saga pattern, 2-phase commit), circuit breakers, rate limiters (Token Bucket, Leaky Bucket, Sliding Window), service mesh
- **Security & Reliability**: Authentication & authorization (OAuth2, OIDC, JWT revocation, RBAC), OWASP Top 10 API Security, rate limiting, data encryption at rest and in transit (TLS/mTLS), secret management
- **Observability & DevOps**: Structured logging (JSON), OpenTelemetry tracing, Prometheus metrics, SLI/SLO/SLA definitions, graceful shutdown, containerization (Docker, Kubernetes)

## Interview Focus Areas
1. **System Architecture**: Designing services that scale horizontally under heavy read/write loads
2. **Data Consistency**: Managing consistency across microservices without distributed deadlocks
3. **Database Performance**: Query optimization, index selection, connection pooling, handling replication lag
4. **Resilience & Fault Tolerance**: Cascading failure mitigation, fallbacks, exponential backoff with jitter
5. **API Quality**: Predictable error payloads, pagination (cursor vs offset), rate limiting, idempotency
6. **Concurrency & Thread Safety**: Preventing race conditions, memory leaks, and goroutine/thread starvation
7. **Production Troubleshooting**: Post-mortem analysis, diagnosing 5xx spikes, database lock contention, memory bloat

## Common Interview Rounds
- **Recruiter Screen** (30 min): Background, architectural scope, scale of systems handled (RPS, data volume)
- **System Design** (60 min): Design a scalable distributed system (e.g. Distributed Rate Limiter, Notification Service, URL Shortener, Payment Processing Gateway, Real-time Chat Backend)
- **Backend Architecture & API Design** (45–60 min): Deep-dive into REST/gRPC APIs, schema design, and caching layers
- **Coding & Data Structures** (60 min): Concurrency puzzles, LRU Cache implementation, In-memory Key-Value store, Trie, Rate Limiter
- **Debugging & Incident Triage** (45 min): Walkthrough of production outage scenarios, slow queries, deadlocks
- **Behavioral & Leadership** (45 min): Post-mortems, cross-team technical consensus, managing technical debt

## Seniority Expectations
At Senior and Staff level, interviewers expect:
- Clear quantitative framing: RPS, p95/p99 latency targets, read/write ratios, storage growth
- Proactive identification of single points of failure (SPOF)
- Realistic tradeoff analysis (e.g. why Redis vs Memcached, why PostgreSQL vs MongoDB, why Kafka vs RabbitMQ)
- Deep understanding of failure modes: network partitions, split-brain, slow consumer problem, poison pills
- Thoughtful database indexing choices based on access patterns rather than generic rules

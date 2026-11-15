# Backend Developer Rubric

## Scoring Dimensions (Scale: 1–5)

### 1. API Design & Protocol Selection (1–5)
- **1 (Unsatisfactory)**: Unstructured endpoints, poor HTTP status code usage, missing error handling, lack of pagination or pagination that leaks database IDs unsafely.
- **2 (Developing)**: Basic REST understanding, but ignores idempotency, versioning, or input validation. Lacks clear error models.
- **3 (Competent)**: Well-structured REST/gRPC interfaces, appropriate status codes, consistent error payloads (RFC 7807), cursor-based pagination, input sanitization and schema validation.
- **4 (Strong)**: Proactively designs for idempotency (Idempotency-Key headers), backwards-compatibility, rate limiting headers, API versioning strategies, and selects appropriate protocols (gRPC vs REST vs WebSockets) based on throughput and streaming needs.
- **5 (Exceptional)**: Masterful contract design, comprehensive schema evolution strategies, API gateway patterns, circuit breaking, fine-grained access control, and benchmarked serialization performance.

### 2. Database Engineering & Data Modeling (1–5)
- **1 (Unsatisfactory)**: Poor normalization, missing primary keys, no awareness of indexing or query performance, dangerous unbounded queries.
- **2 (Developing)**: Understands basic relational joins and foreign keys, but cannot explain index mechanics (B-Trees) or N+1 query problems.
- **3 (Competent)**: Correctly models relational or document schemas. Knows when and why to index columns, explains transaction ACID guarantees, uses connection pooling, prevents SQL injection.
- **4 (Strong)**: Deeply understands transaction isolation levels (Dirty Reads, Non-repeatable reads, Phantom reads), read replicas, query execution plans (EXPLAIN ANALYZE), partitioning strategies, and zero-downtime migrations.
- **5 (Exceptional)**: Expert database internals knowledge: WAL, MVCC, lock escalation, distributed transactions, sharding keys, HotSpot mitigation, and polyglot persistence tradeoffs.

### 3. Scalability, Caching & Performance (1–5)
- **1 (Unsatisfactory)**: Assumes single-server scaling, no caching, vulnerable to server crashes under trivial load spikes.
- **2 (Developing)**: Understands horizontal scaling in concept, but fails to account for stateful bottlenecks, cache invalidation, or session stickiness.
- **3 (Competent)**: Implements cache-aside pattern with Redis/Memcached. Employs horizontal scaling with stateless services, load balancers, and appropriate TTLs.
- **4 (Strong)**: Defends against cache stampedes/thundering herd (mutex locks, probabilistic early expiration), optimizes memory usage, analyzes p95/p99 latency distributions, isolates hot partitions.
- **5 (Exceptional)**: Multi-layer caching architectures (CDN, Edge, L1 in-process, L2 distributed), backpressure management, asynchronous I/O benchmarks, load shedding, and graceful degradation during traffic surges.

### 4. Concurrency, Async & Fault Tolerance (1–5)
- **1 (Unsatisfactory)**: Oblivious to race conditions, blocks event loops or thread pools, no retry or timeout mechanisms.
- **2 (Developing)**: Uses async/await or threads without proper synchronization; vulnerable to deadlocks or unhandled promise rejections.
- **3 (Competent)**: Handles concurrency safely using locks or channel primitives. Implements timeouts, retries with exponential backoff and jitter, and offloads heavy tasks to background workers.
- **4 (Strong)**: Expert handling of message brokers (Kafka/RabbitMQ), consumer groups, partition rebalancing, idempotency in message processing, dead-letter queues, and distributed locks.
- **5 (Exceptional)**: Formulates resilient distributed patterns: Saga pattern for distributed transactions, Outbox pattern for reliable event publishing, bulkheads, chaos engineering mitigation, zero data loss guarantees.

### 5. Security & Observability (1–5)
- **1 (Unsatisfactory)**: Hardcoded secrets, plain text passwords, missing authentication, zero logging.
- **2 (Developing)**: Basic token verification, but unvalidated JWT claims, missing audit logs, and inconsistent log formats.
- **3 (Competent)**: Implements standard OAuth2/JWT flows with secure hashing (bcrypt/argon2), structured JSON logging, health checks (/health, /ready), and OWASP Top 10 API awareness.
- **4 (Strong)**: Employs distributed tracing (OpenTelemetry), rate limiting tiers, RBAC/ABAC authorization, secret rotation, metrics aggregation (Prometheus/Grafana), and actionable alerting thresholds.
- **5 (Exceptional)**: Zero-trust architecture, mutual TLS between microservices, comprehensive audit logging, automated vulnerability scanning in CI/CD, defense-in-depth security posture, and disciplined incident response runbooks.

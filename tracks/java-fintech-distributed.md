# Senior Java Backend & Distributed Systems Engineer (Fintech) Track

## Who This Is For
Senior Java engineers specializing in low-latency financial systems, high-throughput payment switches, transactional integrity, and distributed messaging.

## Expected Skills
- Java 21/17 (Virtual Threads, Pattern Matching, Record patterns, Garbage Collectors ZGC/Shenandoah)
- Spring Boot 3.x, Spring Batch, Spring State Machine
- Apache Kafka (16+ partitions, manual container acks, DLT retries, consumer group rebalancing)
- Redis distributed concurrency control (SETNX PX, atomic Lua release script, distributed locks)
- PostgreSQL performance (table partition pruning, B-Tree index optimization, connection pool starvation mitigation)
- HikariCP connection pool isolation and transaction isolation levels
- JVM profiling (async-profiler, Native Memory Tracking / NMT, off-heap Netty leak triage)
- Distributed transaction patterns (Saga pattern, Outbox pattern, two-phase commit tradeoffs)

## Interview Focus Areas
1. Payment switch routing under 350+ TPS with p99 < 110ms latency SLAs
2. Double-debit race condition prevention across distributed pods
3. Zero-loss message streaming pipelines with Kafka idempotency and dead-letter topics
4. Large-scale EOD reconciliation and batch settlement across multi-million records
5. JVM off-heap direct byte buffer profiling and memory leak remediation

## Key Production Interview Questions
- Walk me through how you prevented double-debit race conditions across distributed payment pods. Why did you use Redis SETNX with Lua instead of a distributed SQL lock?
- In your payment routing service at Airtel, you sustained 350 peak TPS at sub-110ms p99 latency. How did you configure Kafka consumer acknowledgments and thread pools to prevent head-of-line blocking?
- Describe how you diagnosed an off-heap direct buffer memory leak using async-profiler and NMT. What was the root cause and how was it isolated from HikariCP?
- How does Spring Batch range partitioning with JdbcPagingItemReader scale EOD reconciliation for millions of merchant records without exceeding JVM heap limits?

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

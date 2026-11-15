# Senior Backend Engineer Track

## Who This Is For
Senior and Lead Backend Engineers with 5+ years of experience architecting large-scale distributed backends, high-concurrency microservices, data pipelines, and mission-critical cloud infrastructure.

## Expected Skills
- Multi-region architecture and database replication topologies
- Zero-downtime database schema migrations (Expand and Contract pattern)
- High-throughput streaming and event sourcing (Apache Kafka, Debezium, CDC)
- Advanced caching topologies, multi-tier caching (L1 local in-process + L2 distributed Redis)
- Distributed transaction management, compensating transactions, outbox pattern
- Fault-tolerant distributed rate limiters, token bucket algorithms in Redis Lua scripts
- Service-to-service authentication (mTLS, SPIFFE/SPIRE, JWT with JWKS validation)
- Kubernetes deployment patterns, graceful termination, probe configurations

## Interview Focus Areas
1. Scale from 10k RPS to 1M RPS: Bottleneck identification and architectural evolution
2. Database write amplification and read scaling (read replicas, caching, CQRS)
3. Disaster recovery, RTO/RPO targets, active-active vs active-passive failover
4. Incident leadership: Mean Time to Detect (MTTD) and Mean Time to Recover (MTTR)
5. Mentorship and setting engineering standards across backend squads

## Common Interview Rounds
- **System Design Round (Advanced)**: Design YouTube video transcoding pipeline, Stripe payment reconciliation, Uber ride-matching engine
- **Low-Level Design / Concurrency**: Design a thread-safe connection pool, bounded ring buffer, distributed lock manager
- **Architecture Defense**: Justify technological choices, latency-availability tradeoffs, cost optimization

# Senior Java Microservices & Cloud Platform Engineer (Enterprise SaaS) Track

## Who This Is For
Senior engineers architecting multi-tenant enterprise microservices, cloud-native deployments on AWS EKS, resilient API contracts, and high-availability database layers.

## Expected Skills
- Java 21/17, Spring Boot 3, Spring Cloud (Gateway, Config, Eureka)
- Resilience4j (Circuit Breakers, Rate Limiters, Bulkheads, Retry storms mitigation)
- Hibernate/JPA performance tuning (N+1 query elimination, batch fetching, L2 cache)
- PostgreSQL query optimization, schema migration tools (Flyway/Liquibase)
- Docker, Kubernetes (AWS EKS), Helm charts, horizontal pod autoscaling (HPA)
- Contract-first OpenAPI/Swagger specification and client generation

## Interview Focus Areas
1. Microservice decomposition and domain-driven design (DDD) boundaries
2. Tenant isolation strategies (database-per-tenant vs schema-per-tenant vs shared-schema row-level security)
3. Cascading failure prevention with Resilience4j circuit breakers and bulkheads
4. Zero-downtime database migrations with Expand/Contract patterns on EKS

## Key Production Interview Questions
- How do you design a multi-tenant enterprise SaaS backend ensuring data isolation, tenant rate limiting, and noisy-neighbor protection?
- Walk me through how you eliminated N+1 query problems and tuned Hibernate/JPA fetch plans in a large Spring Boot application.
- How do you configure Resilience4j circuit breakers and bulkhead thread pools when integrating with unreliable third-party APIs?
- Describe your zero-downtime rolling update strategy on AWS EKS when a database migration introduces breaking column changes.

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

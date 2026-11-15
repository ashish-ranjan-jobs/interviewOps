export interface CandidateResume {
  id: string;
  category: 'Java' | 'Python & AI';
  name: string;
  role: string;
  specialization: string;
  targetTrack: string;
  skills: string[];
  metrics: string[];
  recommendedModes: string[];
  summary: string;
  fullText: string;
}

export const CANDIDATE_RESUMES: CandidateResume[] = [
  {
    "id": "java-fintech-distributed",
    "category": "Java",
    "name": "Ashish Ranjan",
    "role": "Senior Java Backend & Distributed Systems Engineer",
    "specialization": "Fintech & High-Throughput",
    "targetTrack": "java-fintech-distributed",
    "skills": [
      "Java 21/17",
      "Spring Boot 3",
      "Spring Batch",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "HikariCP",
      "Docker",
      "AWS EKS",
      "Distributed Locks",
      "Sagas",
      "async-profiler",
      "NMT"
    ],
    "metrics": [
      "350 peak TPS",
      "p99 < 110ms",
      "50% pod memory reduction (8GB to 4GB)",
      "45% query latency reduction",
      "99.9% SLO",
      "1,111+ LeetCode"
    ],
    "recommendedModes": [
      "system-design",
      "backend-architecture",
      "concurrency",
      "coding",
      "behavioral"
    ],
    "summary": "Senior Java Backend & Distributed Systems Engineer with 4+ years of verified professional experience specializing in Fintech & High-Throughput.",
    "fullText": "ASHISH RANJAN\nJava Backend & Distributed Systems Engineer | 4+ Years Experience\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL EXPERIENCE\nAirtel International April 2025 \u2013 Present\nSoftware Engineer (Middleware Team - Airtel Africa Payment Bank) Gurgaon\nTechnologies: Java 21/17, Spring Boot 3, Spring Batch, Apache Kafka, Redis, PostgreSQL, HikariCP, Docker, AWS\n\uf0b7 Architected payment routing across banking switches using Java 21, Spring Boot 3, and 16-partition\nKafka, sustaining 350 peak TPS (avg 180, p99 < 110 ms) with idempotency and consumer groups;\neliminated message loss via manual container acks and DLT retries.\n\uf0b7 Profiled off-heap memory leaks and resolved thread-pool contention in notification middleware via\nasync-profiler and NMT, slashing pod footprint by 50% (8 GB to 4 GB) at p99 < 120 ms (~200 TPS);\nisolated network I/O to prevent HikariCP pool starvation.\n\uf0b7 Eliminated double-debit races across payment pods via multi-layer concurrency control combining Redis\ndistributed locks (SETNX PX + Lua release) and primary DB routing; orchestrated distributed Sagas via\nSpring State Machine (99.9% monthly availability SLO).\n\uf0b7 Scaled End-of-Day reconciliation and merchant disbursements on Spring Batch and PostgreSQL,\nleveraging range partitioning with JdbcPagingItemReader, table partition pruning, and skip listeners to\nsettle multi-million daily records within strict SLAs.\nDolcera October 2022 \u2013 March 2025\nSoftware Developer Hyderabad\nTechnologies: Java 17, Spring Boot, Spring Cloud, Apache Kafka, Redis, PostgreSQL, MySQL, Docker, AWS EKS, RDS\n\uf0b7 Architected greenfield backend for IP Author SaaS platform from scratch using Java 17, Spring Boot,\nand Spring Cloud, orchestrating event-driven microservices over Apache Kafka (integrated with\nFastAPI AI worker) for asynchronous document ingestion.\n\uf0b7 Reduced core API response latency by 45% across Hibernate/JPA and PostgreSQL/MySQL (AWS RDS) by\neliminating N+1 queries, restructuring SQL execution plans, optimizing indexes, and tuning HikariCP\nconnection pools alongside Redis caching.\n\uf0b7 Standardized contract-first RESTful APIs to OpenAPI specifications, enforcing stateless OAuth2/JWT\nauthentication and isolating cascading downstream failures using Resilience4j circuit breakers and\nfallback policies.\n\uf0b7 Maintained 99.9% platform availability across production microservices on AWS EKS via Jenkins and\nDocker CI/CD pipelines; slashed redundant LLM calls via SSE streaming and Redis Vector Search\nsimilarity caching (0.94 cosine threshold).\nEDUCATION\nJadavpur University 2018 \u2013 2022\nBachelor of Engineering in Computer Science & Engineering | GPA: 8.09 / 10.0 Kolkata, India\nTECHNICAL SKILLS\nLanguages & Core Systems: Java (21, 17, 8), SQL, Multithreading, Concurrency, JVM Profiling & Memory Tuning (NMT,\nasync-profiler), Data Structures & Algorithms\nFrameworks & Microservices: Spring Boot 3.x, Spring Cloud, Spring Batch, Spring Security (OAuth2/JWT), Spring State\nMachine, Hibernate/JPA, RESTful APIs, OpenAPI\nDistributed Systems & Messaging: Apache Kafka (Partitions, Consumer Groups, DLT), Redis (SETNX Distributed\nLocks, Caching), Distributed Sagas, Resilience4j, Idempotency\nDatabases & Cloud/DevOps: PostgreSQL, MySQL, AWS (EKS, RDS, EC2, S3), Docker, Kubernetes, CI/CD (Jenkins, Git),\nHikariCP, Index Tuning, Partition Pruning\nAI & Platform Integrations: LLM APIs, Server-Sent Events (SSE), Vector Indexing, Redis Vector Search (Cosine\nSimilarity), Semantic Caching, Prompt Management\nADDITIONAL HIGHLIGHTS\n\uf0b7 Achieved State Rank 1160 (99.2 percentile) in WBJEE among over 150,000 candidates.\n\uf0b7 Consistently ranked as a top performer in competitive programming, solving 1111+ problems on\nLeetCode (max rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "java-microservices-cloud",
    "category": "Java",
    "name": "Ashish Ranjan",
    "role": "Senior Java Microservices & Cloud Platform Engineer",
    "specialization": "Enterprise SaaS & Cloud Native",
    "targetTrack": "java-microservices-cloud",
    "skills": [
      "Java 21/17",
      "Spring Boot 3",
      "Spring Cloud",
      "OpenAPI",
      "Resilience4j",
      "Hibernate/JPA",
      "PostgreSQL",
      "Docker",
      "AWS EKS",
      "Partition Pruning",
      "N+1 Elimination"
    ],
    "metrics": [
      "350 peak TPS",
      "p99 < 110ms",
      "50% memory drop",
      "45% API latency reduction",
      "99.9% SLO"
    ],
    "recommendedModes": [
      "backend-architecture",
      "api-design",
      "sql-databases",
      "system-design",
      "behavioral"
    ],
    "summary": "Senior Java Microservices & Cloud Platform Engineer with 4+ years of verified professional experience specializing in Enterprise SaaS & Cloud Native.",
    "fullText": "ASHISH RANJAN\nJava Microservices & Cloud Platform Engineer | 4+ Years Experience\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL EXPERIENCE\nAirtel International April 2025 \u2013 Present\nSoftware Engineer (Core Backend & Cloud Middleware) Gurgaon\nTechnologies: Java 21/17, Spring Boot 3, Spring Cloud, Apache Kafka, Redis, PostgreSQL, Docker, AWS EKS\n\uf0b7 Architected cloud middleware on AWS EKS using Java 21, Spring Boot 3, and 16-partition Kafka,\nsustaining 350 peak TPS (p99 < 110 ms) with automated horizontal container autoscaling and zero-loss\nconsumer group rebalancing.\n\uf0b7 Optimized JVM runtime memory and resolved thread-pool contention using async-profiler and NMT,\nslashing container footprint by 50% (8 GB to 4 GB) while isolating blocking network I/O from HikariCP\nconnection pools.\n\uf0b7 Engineered distributed multi-service coordination and transactional state workflows via Spring State\nMachine and Redis distributed locks, maintaining strict data consistency and a 99.9% monthly\navailability SLO under peak load bursts.\n\uf0b7 Automated large-scale financial batch reconciliation pipelines on Spring Batch and PostgreSQL,\nleveraging range partitioning with JdbcPagingItemReader and partition pruning to settle multi-million\ndaily records within SLA.\nDolcera October 2022 \u2013 March 2025\nSoftware Developer (SaaS Platform & Backend Engineering) Hyderabad\nTechnologies: Java 17, Spring Boot 3, Spring Cloud, Apache Kafka, Hibernate/JPA, PostgreSQL, Docker, AWS EKS\n\uf0b7 Architected greenfield microservices for IP Author multi-tenant SaaS platform using Java 17, Spring\nBoot 3, and Spring Cloud, structuring service discovery, API gateways, and asynchronous document\nprocessing over Apache Kafka.\n\uf0b7 Slashed core API latency by 45% across Hibernate/JPA and PostgreSQL/MySQL on AWS RDS by\nrestructuring SQL execution plans, removing N+1 queries, creating composite indexes, and tuning\nHikariCP connection pools with Redis caching.\n\uf0b7 Standardized enterprise contract-first RESTful APIs via OpenAPI specifications, securing endpoints with\nstateless OAuth2/JWT role-based access and preventing cascading failures using Resilience4j circuit\nbreakers.\n\uf0b7 Orchestrated containerized microservices on AWS EKS with Docker and automated Jenkins CI/CD\npipelines, sustaining 99.9% platform availability and enabling zero-downtime rolling deployments\nacross production clusters.\nEDUCATION\nJadavpur University 2018 \u2013 2022\nBachelor of Engineering in Computer Science & Engineering | GPA: 8.09 / 10.0 Kolkata, India\nTECHNICAL SKILLS\nLanguages & Core Systems: Java (21, 17, 8), SQL, Multithreading, Concurrency Controls, JVM Profiling & Memory\nTuning (NMT, async-profiler), Object-Oriented Design\nEnterprise Microservices: Spring Boot 3.x, Spring Cloud (Gateway, Config), Spring Security (OAuth2/JWT, RBAC),\nSpring Batch, RESTful APIs, OpenAPI/Swagger\nDistributed Architecture: Apache Kafka (Event Streaming, Partitions, Consumer Groups), Redis (Distributed Caching,\nLock Management), Event-Driven Microservices\nDatabases & Storage: PostgreSQL, MySQL, Hibernate/JPA, HikariCP Connection Pooling, SQL Query Plan Optimization,\nIndex Tuning, Partition Pruning\nCloud, DevOps & Reliability: AWS (EKS, RDS, EC2, S3), Docker, Kubernetes (Helm), CI/CD (Jenkins, Git), Resilience4j\nCircuit Breakers, Availability SLOs (99.9%)\nADDITIONAL HIGHLIGHTS\n\uf0b7 Achieved State Rank 1160 (99.2 percentile) in WBJEE among over 150,000 candidates.\n\uf0b7 Consistently ranked as a top performer in competitive programming, solving 1111+ problems on\nLeetCode (max rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "java-enterprise-ai",
    "category": "Java",
    "name": "Ashish Ranjan",
    "role": "Senior Java & Enterprise AI Platform Engineer",
    "specialization": "Enterprise GenAI & AI Gateway",
    "targetTrack": "java-enterprise-ai",
    "skills": [
      "Java 21/17",
      "Spring Boot 3",
      "Python/FastAPI",
      "Apache Kafka",
      "Redis Vector Search",
      "SSE Token Streaming",
      "Semantic Caching",
      "AWS EKS",
      "Spring State Machine"
    ],
    "metrics": [
      "350 peak TPS",
      "p99 < 110ms",
      "0.94 cosine similarity caching",
      "50% pod memory drop",
      "99.9% SLO"
    ],
    "recommendedModes": [
      "system-design",
      "ai-assisted-engineering",
      "backend-architecture",
      "concurrency",
      "behavioral"
    ],
    "summary": "Senior Java & Enterprise AI Platform Engineer with 4+ years of verified professional experience specializing in Enterprise GenAI & AI Gateway.",
    "fullText": "ASHISH RANJAN\nJava & Enterprise AI Platform Engineer | 4+ Years Experience\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL EXPERIENCE\nAirtel International April 2025 \u2013 Present\nSoftware Engineer (Backend Platform & Messaging Middleware) Gurgaon\nTechnologies: Java 21/17, Spring Boot 3, Apache Kafka, Redis, PostgreSQL, HikariCP, Docker, AWS EKS\n\uf0b7 Architected high-throughput message ingestion and event routing across distributed gateways using Java\n21, Spring Boot 3, and 16-partition Kafka, sustaining 350 peak TPS (p99 < 110 ms) with automated\nidempotency and consumer group failover.\n\uf0b7 Profiled off-heap memory leaks and thread contention in high-scale notification middleware via async-\nprofiler and NMT, slashing pod footprint by 50% (8 GB to 4 GB) and decoupling asynchronous I/O to\nprevent HikariCP pool exhaustion.\n\uf0b7 Eliminated distributed race conditions across concurrent application pods using Redis distributed locks\n(SETNX PX + Lua script release); orchestrated multi-stage operational lifecycles via Spring State\nMachine sustaining a 99.9% SLO.\n\uf0b7 Scaled high-volume End-of-Day reconciliation data pipelines on Spring Batch and PostgreSQL, utilizing\nrange-partitioned JdbcPagingItemReader and table partition pruning to process multi-million daily\nrecords reliably.\nDolcera October 2022 \u2013 March 2025\nSoftware Developer (AI Platform & Java Microservices) Hyderabad\nTechnologies: Java 17, Spring Boot, Apache Kafka, Python, FastAPI, Redis Vector Search, PostgreSQL, AWS EKS\n\uf0b7 Architected backend architecture for IP Author SaaS platform using Java 17 and Spring Boot, integrating\nwith Python FastAPI AI workers via Apache Kafka event streaming for asynchronous, non-blocking\npatent document processing.\n\uf0b7 Engineered real-time token delivery using Server-Sent Events (SSE) and implemented semantic\nresponse caching on Redis Vector Search (0.94 cosine threshold), significantly slashing redundant\nLLM API calls and compute latency.\n\uf0b7 Developed scalable data ingestion and semantic search pipelines across patent datasets, integrating\nvector embeddings with PostgreSQL (AWS RDS) and tuning HikariCP connection pools to cut core query\nlatency by 45%.\n\uf0b7 Containerized hybrid Java-Python microservices using Docker and deployed on AWS EKS via Jenkins\nCI/CD pipelines, enforcing contract-first OpenAPI standards and sustaining 99.9% platform\navailability.\nEDUCATION\nJadavpur University 2018 \u2013 2022\nBachelor of Engineering in Computer Science & Engineering | GPA: 8.09 / 10.0 Kolkata, India\nTECHNICAL SKILLS\nLanguages & Runtimes: Java (21, 17, 8), Python (3.11), SQL, Multithreading, Concurrency, JVM Profiling (NMT, async-\nprofiler), Async IO Programming\nEnterprise Backend & APIs: Spring Boot 3.x, Spring Cloud, Spring Batch, RESTful Microservices, Server-Sent Events\n(SSE), OpenAPI/Swagger, Spring Security\nAI Platform & Vector Search: LLM APIs, Redis Vector Search (Cosine Similarity Caching), Semantic Caching, Prompt\nManagement, RAG Pipelines, Vector Indexing\nDistributed Systems & Messaging: Apache Kafka (Event Streaming, Ingestion Pipelines), Redis (Distributed Caching,\nDistributed Locks), Resilience4j, Idempotency\nCloud, Databases & DevOps: AWS (EKS, RDS, EC2, S3), Docker, Kubernetes, PostgreSQL, MySQL, HikariCP\nConnection Pooling, CI/CD (Jenkins, Git), 99.9% SLO\nADDITIONAL HIGHLIGHTS\n\uf0b7 Achieved State Rank 1160 (99.2 percentile) in WBJEE among over 150,000 candidates.\n\uf0b7 Consistently ranked as a top performer in competitive programming, solving 1111+ problems on\nLeetCode (max rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "java-fullstack-react",
    "category": "Java",
    "name": "Ashish Ranjan",
    "role": "Senior Full Stack Java Developer",
    "specialization": "React.js + Spring Boot 3",
    "targetTrack": "java-fullstack-react",
    "skills": [
      "Java 21/17",
      "Spring Boot 3",
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Apache Kafka",
      "Redis",
      "Docker",
      "AWS"
    ],
    "metrics": [
      "350 peak TPS",
      "p99 < 110ms",
      "50% memory footprint drop",
      "1,111+ LeetCode",
      "WBJEE Rank 1160"
    ],
    "recommendedModes": [
      "coding",
      "backend-architecture",
      "system-design",
      "project-deep-dive",
      "behavioral"
    ],
    "summary": "Senior Full Stack Java Developer with 4+ years of verified professional experience specializing in React.js + Spring Boot 3.",
    "fullText": "ASHISH RANJAN\nFull Stack Java Developer | 4+ Years Experience\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL EXPERIENCE\nAirtel International April 2025 \u2013 Present\nSoftware Engineer (Full Stack & Middleware Systems) Gurgaon\nTechnologies: Java 21/17, Spring Boot 3, Spring Batch, Apache Kafka, Redis, PostgreSQL, RESTful APIs, Docker, AWS\n\uf0b7 Architected high-throughput transaction and API routing switches using Java 21, Spring Boot 3, and 16-\npartition Kafka, sustaining 350 peak TPS (p99 < 110 ms) with consumer-side idempotency and real-\ntime event distribution.\n\uf0b7 Diagnosed and resolved off-heap memory leaks and thread-pool bottlenecks using async-profiler and\nNMT, slashing container footprint by 50% (8 GB to 4 GB) while decoupling external network calls to\nprotect HikariCP pools.\n\uf0b7 Enforced multi-layer concurrency control combining Redis distributed locks (SETNX PX + Lua release)\nand primary DB routing; orchestrated state transitions via Spring State Machine sustaining a 99.9%\nmonthly availability SLO.\n\uf0b7 Engineered automated batch reconciliation services on Spring Batch and PostgreSQL, implementing\nrange partitioning with JdbcPagingItemReader and table partition pruning to settle multi-million daily\nrecords within SLA.\nDolcera October 2022 \u2013 March 2025\nFull Stack Software Developer Hyderabad\nTechnologies: React.js, TypeScript, Next.js, Java 17, Spring Boot, Spring Cloud, PostgreSQL, AWS EKS, Docker\n\uf0b7 Architected full-stack architecture for IP Author SaaS platform from scratch, building responsive React.js\n(TypeScript, Next.js) web interfaces integrated with high-throughput Java 17 and Spring Boot\nbackend microservices.\n\uf0b7 Implemented real-time streaming interfaces using Server-Sent Events (SSE) and interactive state\nmanagement, cutting UI latency and pairing with Redis semantic caching to slash redundant backend\ndata retrieval.\n\uf0b7 Reduced core API response latency by 45% across Hibernate/JPA and PostgreSQL/MySQL by optimizing\nSQL execution plans, removing N+1 queries, creating database indexes, and tuning HikariCP connection\npools.\n\uf0b7 Standardized contract-first REST APIs to OpenAPI specifications with OAuth2/JWT auth; containerized\nservices with Docker and deployed on AWS EKS via Jenkins CI/CD, sustaining 99.9% platform\navailability.\nEDUCATION\nJadavpur University 2018 \u2013 2022\nBachelor of Engineering in Computer Science & Engineering | GPA: 8.09 / 10.0 Kolkata, India\nTECHNICAL SKILLS\nFrontend Engineering: React.js, TypeScript, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web\nDesign, Component State Management\nBackend & Microservices: Java (21, 17, 8), Spring Boot 3.x, Spring Cloud, Spring Security (OAuth2/JWT), RESTful APIs,\nOpenAPI/Swagger, Spring Batch, Hibernate/JPA\nDistributed Systems & Caching: Apache Kafka (Event Streaming), Redis (Distributed Caching, Session Management),\nEvent-Driven Architecture, Resilience4j\nDatabases & Cloud: PostgreSQL, MySQL, AWS (EKS, RDS, EC2, S3), Docker, Kubernetes, HikariCP Connection Pooling,\nSQL Query Tuning, Partition Pruning\nDevOps & Engineering Rigor: CI/CD (Jenkins, Git), Server-Sent Events (SSE), WebSockets, Linux/Bash, 1111+\nLeetCode Algorithmic Problems (Max 1877)\nADDITIONAL HIGHLIGHTS\n\uf0b7 Achieved State Rank 1160 (99.2 percentile) in WBJEE among over 150,000 candidates.\n\uf0b7 Consistently ranked as a top performer in competitive programming, solving 1111+ problems on\nLeetCode (max rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "python-ai-platform",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior Python & AI Platform Engineer",
    "specialization": "Master Python & High-Scale AI",
    "targetTrack": "python-ai-platform",
    "skills": [
      "Python",
      "FastAPI",
      "asyncio",
      "Apache Kafka",
      "LangGraph",
      "Redis Vector Search",
      "Hybrid RAG",
      "PostgreSQL",
      "Kubernetes (EKS)",
      "RAGAS"
    ],
    "metrics": [
      "3,500+ requests/sec",
      "sub-400ms p95",
      "64% ($180K+/year) cost reduction",
      "82% cache hit rate",
      "42% deflection rate",
      "99.9% uptime"
    ],
    "recommendedModes": [
      "system-design",
      "backend-architecture",
      "ai-assisted-engineering",
      "concurrency",
      "behavioral"
    ],
    "summary": "Senior Python & AI Platform Engineer with 4+ years of verified professional experience architecting high-throughput distributed microservices and enterprise Generative AI platforms. Expert in asynchronous architectures (FastAPI, asyncio), Apache Kafka event streaming, multilingual Hybrid RAG, multi-agent orchestration (LangGraph), and Redis Vector Search semantic caching. Track record of authoring architecture RFCs, cutting LLM inference costs by 64% ($180K+/year), and scaling systems sustaining 3,500+ RPS at 99.9% uptime.",
    "fullText": "ASHISH RANJAN\nSenior Python & AI Platform Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior Python & AI Platform Engineer with 4+ years of verified professional experience architecting high-throughput distributed\nmicroservices and enterprise Generative AI platforms. Expert in asynchronous architectures (FastAPI, asyncio), Apache Kafka event\nstreaming, multilingual Hybrid RAG, multi-agent orchestration (LangGraph), and Redis Vector Search semantic caching. Track record of\nauthoring architecture RFCs, cutting LLM inference costs by 64% ($180K+/year), and scaling systems sustaining 3,500+ RPS at 99.9%\nuptime.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices (FastAPI, asyncio) powering AI-driven customer\nsupport across 14 African countries (~200M subscriber base), sustaining peak traffic of 3,500+ requests/second at 99.9%\nuptime.\n\uf0b7 Engineered distributed event-streaming pipelines with Apache Kafka partitioned by conversation ID, coordinating Redis\nconversational state and FastAPI SSE streaming for ~6M conversations with sub-400ms p95 latency, driving a 42% automated\nticket deflection rate.\n\uf0b7 Designed intelligent routing and semantic similarity caching on Redis Vector Search (0.88 cosine similarity threshold, 82% hit\nrate), slashing LLM inference costs by 64% ($180K+/year savings).\n\uf0b7 Implemented multilingual Hybrid RAG over 180K+ telecom support documents combining dense vector embeddings, BM25\nlexical search, and Reciprocal Rank Fusion (RRF) reranking.\n\uf0b7 Orchestrated stateful LangGraph multi-agent workflows featuring dynamic tool calling, PII redaction, human-in-the-loop approval\ngates, token-bucket rate limiting, and Pydantic-enforced structured outputs.\n\uf0b7 Established production observability (OpenTelemetry, Prometheus, Grafana) on Kubernetes (AWS EKS), tuning PostgreSQL\nasyncpg connection pooling and indexes to sustain 99.9% uptime; authored architecture RFCs and SLO budgets.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Engineered production Hybrid RAG (semantic search + BM25 + FAISS), boosting retrieval Recall@10 from 0.58 to 0.81 across\npatent analysis workflows, reducing patent search and drafting turnaround by 60%.\n\uf0b7 Optimized transformer model inference using Hugging Face Transformers and ONNX Runtime graph optimization, slashing p95\nlatency by 45% (from 320ms to 175ms) across document generation pipelines.\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\npre-fork worker pools, idempotent task execution, retries, and dead-letter queues.\n\uf0b7 Integrated automated CI/CD evaluation gates (RAGAS, TruLens) benchmarking groundedness (>0.88), preventing hallucination\nregressions; mentored engineers on asynchronous testing standards.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered distributed multi-agent system utilizing FastAPI, LangGraph, and LangChain with bounded cyclical reflection loops and\ndynamic tool dispatching, orchestrating autonomous reasoning across multi-step technical queries.\n\uf0b7 Implemented high-concurrency pgvector Hybrid Retrieval with asyncpg connection pooling and RRF reranking, load-tested via\nLocust sustaining 1,200 QPS with sub-50ms p95 response times.\n\uf0b7 Automated infrastructure provisioning using Terraform and Helm on Kubernetes (AWS EKS), integrating CI evaluation pipelines\nbenchmarking groundedness (>0.88) via RAGAS.\nTECHNICAL SKILLS\nLanguages & Core Systems: Python (3.11/3.10), SQL, asyncio, Multithreading, Concurrency Controls, Pydantic, pytest, mypy,\nDistributed System Design\nBackend Frameworks & APIs: FastAPI, Starlette, Uvicorn, RESTful Microservices, Server-Sent Events (SSE), Connection Pooling, Circuit\nBreakers\nGenAI & Agentic AI: LangGraph, LangChain, ReAct Framework, Multi-Agent Workflows, PII Redaction, Guardrails, Structured Outputs,\nModel Routing\nInference & Retrieval: Hugging Face Transformers, ONNX Runtime, Redis Vector Search (Cosine Semantic Caching), pgvector, FAISS,\nBM25, Hybrid RAG, RRF Reranking\nDistributed Systems & Streaming: Apache Kafka (Event Streaming, Consumer Groups, Partitions, DLQs), Redis (Distributed Caching,\nLocks), Celery, PostgreSQL (asyncpg, Indexing)\nCloud, Containers & Infrastructure: Kubernetes (AWS EKS, Helm), Terraform, Docker, OpenTelemetry, Prometheus, Grafana, RAGAS,\nTruLens, AWS (S3, RDS, EC2), Git, CI/CD\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "python-backend-platform",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior Python Backend & Platform Engineer",
    "specialization": "Distributed Async Backend Systems",
    "targetTrack": "python-backend-platform",
    "skills": [
      "Python",
      "FastAPI",
      "asyncio",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "Docker",
      "AWS EKS",
      "Database Indexing",
      "Distributed Caching"
    ],
    "metrics": [
      "3,500+ requests/sec",
      "sub-50ms p95",
      "45% query latency reduction",
      "99.9% uptime",
      "1,111+ LeetCode"
    ],
    "recommendedModes": [
      "backend-architecture",
      "system-design",
      "sql-databases",
      "concurrency",
      "behavioral"
    ],
    "summary": "Senior Python Backend & Platform Engineer with 4+ years of verified professional experience architecting high-throughput, fault-tolerant distributed microservices and asynchronous backend platforms. Expert in Python 3.11, FastAPI, asyncio, and event streaming with Apache Kafka. Proven track record of authoring architecture RFCs, implementing distributed caching with Redis, optimizing PostgreSQL asyncpg connection layers, and sustaining 99.9% uptime at 3,500+ RPS. PROFESSIONAL EXPERIENCE",
    "fullText": "ASHISH RANJAN\nSenior Python Backend & Platform Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior Python Backend & Platform Engineer with 4+ years of verified professional experience architecting high-throughput, fault-tolerant\ndistributed microservices and asynchronous backend platforms. Expert in Python 3.11, FastAPI, asyncio, and event streaming with Apache\nKafka. Proven track record of authoring architecture RFCs, implementing distributed caching with Redis, optimizing PostgreSQL asyncpg\nconnection layers, and sustaining 99.9% uptime at 3,500+ RPS.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices (FastAPI, asyncio) powering distributed customer support\nacross 14 African countries (~200M subscriber base), sustaining peak traffic of 3,500+ requests/second at 99.9% uptime.\n\uf0b7 Engineered scalable asynchronous processing pipelines and event streaming with Apache Kafka partitioned by conversation ID,\ncoordinating Redis state management and FastAPI SSE streaming for ~6M conversations with sub-400ms p95 latency (42%\nticket deflection).\n\uf0b7 Established observability, distributed tracing, and reliability practices (OpenTelemetry, Prometheus, Grafana) across\nKubernetes (AWS EKS, Helm) clusters, tuning PostgreSQL asyncpg connection pooling and query plans to sustain 99.9%\nuptime under peak burst traffic.\n\uf0b7 Designed intelligent query routing and distributed caching on Redis Vector Search (0.88 cosine threshold, 82% hit rate),\ncutting LLM inference costs by 64% ($180K+/year) while protecting backend availability.\n\uf0b7 Implemented high-throughput multilingual retrieval pipelines over 180K+ documents using dense vectors, BM25, and Reciprocal\nRank Fusion (RRF) reranking.\n\uf0b7 Orchestrated robust backend worker pools with Pydantic schema validation, token-bucket rate limiting, circuit breakers, and\nautomated retry mechanisms; authored cross-team architecture RFCs.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\npre-fork worker pools, idempotent task retries, and dead-letter queues, cutting processing turnaround by 60%.\n\uf0b7 Structured resilient asynchronous patent-analysis workflows on Celery task queues with optimized worker pools and robust failure\nrecovery.\n\uf0b7 Formulated high-concurrency retrieval microservices (semantic search + BM25 + FAISS), boosting Recall@10 from 0.58 to 0.81\nacross patent analysis workflows.\n\uf0b7 Optimized inference runtime with ONNX Runtime and Hugging Face Transformers, slashing p95 processing latency by 45%\n(from 320ms to 175ms).\n\uf0b7 Integrated automated regression testing (RAGAS, TruLens) into CI/CD pipelines to guarantee retrieval groundedness and service\nquality; mentored engineers on async testing standards.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered modular asynchronous microservices architecture utilizing FastAPI and LangGraph state graphs with bounded cyclical\nreflection loops.\n\uf0b7 Built pgvector hybrid retrieval service with asyncpg connection pooling and Reciprocal Rank Fusion (RRF) reranking, load-\ntested via Locust sustaining 1,200 QPS with sub-50ms p95 response times.\n\uf0b7 Automated containerized microservices provisioning using Terraform and Helm on Kubernetes (AWS EKS) with automated CI\ntesting suites.\nTECHNICAL SKILLS\nLanguages & Core Systems: Python (3.11/3.10), SQL, asyncio, Multithreading, Concurrency Controls, Pydantic, pytest, mypy,\nDistributed System Design\nFrameworks & API Architecture: FastAPI, Starlette, Uvicorn, RESTful Microservices, Server-Sent Events (SSE), Connection Pooling,\nCircuit Breakers, Idempotent APIs\nDistributed Systems & Streaming: Apache Kafka (Event Streaming, Consumer Groups, Partitions, DLQs), Redis (Distributed Caching,\nLocks), Celery Task Queues\nDatabases & Storage Layers: PostgreSQL (asyncpg, B-Tree Indexing, Query Optimization, Connection Pooling), Redis Vector Search,\npgvector, Distributed State\nCloud, Containers & Observability: Kubernetes (AWS EKS, Helm), Terraform, Docker, OpenTelemetry, Prometheus, Grafana, AWS (S3,\nRDS, EC2), Git, CI/CD, 99.9% Uptime Governance\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "genai-llm-agentic",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior GenAI, LLM & Agentic AI Engineer",
    "specialization": "Multi-Agent Systems & RAG Pipelines",
    "targetTrack": "genai-llm-agentic",
    "skills": [
      "LangGraph",
      "Multi-Agent Workflows",
      "Hybrid RAG",
      "Redis Vector Search",
      "vLLM",
      "Prompt Engineering",
      "RAGAS Evaluation",
      "FastAPI",
      "Kafka"
    ],
    "metrics": [
      "Recall@10 from 0.58 to 0.81",
      "64% LLM cost reduction",
      "42% automated deflection",
      "~6M conversations",
      "sub-400ms latency"
    ],
    "recommendedModes": [
      "ai-assisted-engineering",
      "system-design",
      "project-deep-dive",
      "backend-architecture",
      "behavioral"
    ],
    "summary": "Senior GenAI, LLM & Agentic AI Engineer with 4+ years of verified professional experience developing production agentic state machines and high-recall RAG platforms. Specialized in LangGraph multi-agent orchestration, hierarchical ReAct patterns, reflection loops, and human-in-the-loop controls. Expert in multilingual hybrid retrieval (dense + BM25 + RRF), Redis Vector Search semantic similarity caching (64% cost reduction, $180K+/year savings), and automated evaluation gates in CI/CD using RAGAS and TruLens. PROFESSIONAL EXPERIENCE",
    "fullText": "ASHISH RANJAN\nSenior GenAI, LLM & Agentic AI Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior GenAI, LLM & Agentic AI Engineer with 4+ years of verified professional experience developing production agentic state machines\nand high-recall RAG platforms. Specialized in LangGraph multi-agent orchestration, hierarchical ReAct patterns, reflection loops, and\nhuman-in-the-loop controls. Expert in multilingual hybrid retrieval (dense + BM25 + RRF), Redis Vector Search semantic similarity caching\n(64% cost reduction, $180K+/year savings), and automated evaluation gates in CI/CD using RAGAS and TruLens.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices powering AI-driven customer support across 14 African\ncountries (~200M subscriber base), sustaining 3,500+ peak RPS at 99.9% uptime.\n\uf0b7 Orchestrated stateful LangGraph multi-agent workflows with dynamic tool calling, bounded reflection loops, PII redaction,\nhuman-in-the-loop approval gates, and Pydantic-enforced structured outputs.\n\uf0b7 Designed intelligent intent routing and semantic caching on Redis Vector Search (0.88 cosine threshold, 82% hit rate, <1%\nfalse positive rate), cutting LLM inference costs by 64% ($180K+/year savings).\n\uf0b7 Implemented multilingual Hybrid RAG over 180K+ telecom support documents using dense embeddings, BM25 lexical search,\nand Reciprocal Rank Fusion (RRF) reranking.\n\uf0b7 Engineered scalable asynchronous processing pipelines and Kafka event streaming partitioned by conversation ID, supporting ~6M\nconversations with conversational state and SSE streaming (42% ticket deflection).\n\uf0b7 Established observability and evaluation telemetry (OpenTelemetry, Prometheus, Grafana) across Kubernetes (AWS EKS,\nHelm) clusters, sustaining 99.9% uptime; authored cross-team GenAI architecture RFCs.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Engineered production Hybrid RAG (semantic + BM25 + FAISS), boosting Recall@10 from 0.58 to 0.81 across complex patent\nanalysis workflows, reducing patent drafting turnaround by 60%.\n\uf0b7 Integrated RAGAS and TruLens into CI/CD pipelines to automate evaluation of retrieval quality, context relevance, and\ngroundedness, eliminating hallucination regressions before release.\n\uf0b7 Optimized transformer inference runtime using Hugging Face Transformers and ONNX Runtime graph optimization, slashing p95\nlatency by 45% (from 320ms to 175ms).\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\npre-fork worker pools, idempotent task retries, and dead-letter queues.\n\uf0b7 Formulated schema-enforced prompt engineering and structured JSON extraction frameworks, increasing automated legal\ninformation extraction reliability to 99.4%.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered modular multi-agent workflow architecture utilizing LangGraph state graphs, hierarchical ReAct patterns, and bounded\ncyclical reflection loops for autonomous query resolution.\n\uf0b7 Built asynchronous FastAPI inference gateway with Redis semantic caching and Locust load testing (benchmarked at 1,200\nQPS under concurrent load with sub-50ms cache response).\n\uf0b7 Containerized microservices using Terraform and Helm on Kubernetes (AWS EKS) with automated CI evaluation suite\nbenchmarking groundedness (>0.88) and latency via RAGAS.\nTECHNICAL SKILLS\nGenAI & Agent Orchestration: LangGraph, LangChain, Multi-Agent Systems, ReAct Cycles, Reflection Loops, Tool Orchestration,\nHuman-in-the-Loop Checkpoints, Model Routing\nRAG & Vector Retrieval: Hybrid RAG (Dense + BM25 + Reciprocal Rank Fusion), Redis Vector Search (Cosine Semantic Caching),\npgvector, FAISS, Semantic Search\nGuardrails & Reliability: Schema-Constrained Decoding (Pydantic), PII Redaction, Tool Sandboxing, Hallucination Prevention,\nStructured Outputs, Token-Bucket Rate Limiting\nLLM Evaluation & MLOps: RAGAS, TruLens (Faithfulness, Groundedness, Context Relevance), CI/CD Regression Gates, OpenTelemetry,\nPrometheus, Grafana\nBackend & Distributed Core: Python (3.11), FastAPI, asyncio, Celery, Apache Kafka (Event Streaming), Redis, PostgreSQL (asyncpg),\nDocker, Kubernetes (AWS EKS, Helm), AWS, Git\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "applied-ml-inference",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior Applied ML & Inference Engineer",
    "specialization": "Inference Latency & Model Deployment",
    "targetTrack": "applied-ml-inference",
    "skills": [
      "vLLM",
      "Triton",
      "PyTorch",
      "ONNX",
      "Hugging Face",
      "CUDA",
      "FastAPI",
      "Redis Vector Search",
      "Latency Profiling",
      "Kubernetes"
    ],
    "metrics": [
      "Latency drop from 320ms to 175ms (45%)",
      "3,500+ RPS",
      "82% semantic cache hit rate",
      "99.9% uptime"
    ],
    "recommendedModes": [
      "ai-assisted-engineering",
      "backend-architecture",
      "system-design",
      "coding",
      "behavioral"
    ],
    "summary": "Senior Applied ML & Inference Engineer with 4+ years of verified professional experience deploying low-latency model inference runtimes, embedding pipelines, and semantic retrieval systems in production. Expert in ONNX Runtime graph optimizations, Hugging Face Transformers serving, and vector retrieval (pgvector, Redis Vector Search, FAISS). Demonstrated success slashing p95 inference latency by 45% (from 320ms to 175ms), reducing LLM costs by 64% ($180K+/year), and scaling services to 3,500+ RPS at 99.9% uptime. PROFESSIONAL EXPERIENCE",
    "fullText": "ASHISH RANJAN\nSenior Applied ML & Inference Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior Applied ML & Inference Engineer with 4+ years of verified professional experience deploying low-latency model inference\nruntimes, embedding pipelines, and semantic retrieval systems in production. Expert in ONNX Runtime graph optimizations, Hugging\nFace Transformers serving, and vector retrieval (pgvector, Redis Vector Search, FAISS). Demonstrated success slashing p95 inference\nlatency by 45% (from 320ms to 175ms), reducing LLM costs by 64% ($180K+/year), and scaling services to 3,500+ RPS at 99.9% uptime.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices powering AI-driven customer support across 14 African\ncountries (~200M subscriber base), sustaining 3,500+ peak RPS at 99.9% uptime.\n\uf0b7 Designed intelligent query routing and semantic similarity caching on Redis Vector Search (0.88 cosine similarity threshold,\n82% hit rate), slashing LLM inference costs by 64% ($180K+/year savings).\n\uf0b7 Engineered scalable asynchronous processing pipelines and event streaming with Apache Kafka, managing conversational state\nand SSE streaming for ~6M conversations with sub-400ms p95 latency (42% ticket deflection).\n\uf0b7 Implemented multilingual hybrid retrieval over 180K+ telecom support documents combining dense embeddings, BM25, and\nReciprocal Rank Fusion (RRF) reranking.\n\uf0b7 Orchestrated LangGraph agent workflows with tool orchestration, PII redaction, human approval gates, token-bucket rate limiting,\nand Pydantic structured output validation.\n\uf0b7 Established observability, distributed tracing, and reliability practices (OpenTelemetry, Prometheus, Grafana) across\nKubernetes (AWS EKS, Helm) clusters, sustaining 99.9% uptime.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Optimized transformer inference with Hugging Face Transformers + ONNX Runtime graph optimization, slashing p95 latency by\n45% (from 320ms to 175ms) across patent drafting pipelines.\n\uf0b7 Engineered production Hybrid RAG (semantic + BM25 + FAISS), boosting Recall@10 from 0.58 to 0.81 over 500K+ patent\ndocuments, reducing drafting turnaround by 60%.\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\npre-fork worker pools, idempotent retries, and dead-letter queues.\n\uf0b7 Structured resilient asynchronous patent-analysis workflows on Celery workers with secure API integrations and schema validation.\n\uf0b7 Integrated RAGAS and TruLens into CI/CD to automate evaluation of retrieval quality, groundedness, and faithfulness, enforcing\nquality thresholds before production releases.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered modular multi-agent workflow architecture utilizing LangGraph state graphs, hierarchical ReAct patterns, and bounded\ncyclical reflection loops.\n\uf0b7 Built asynchronous FastAPI inference gateway with Redis semantic caching and Locust load testing (benchmarked at 1,200 QPS\nunder concurrent load with sub-50ms cache response).\n\uf0b7 Containerized microservices using Terraform and Helm on Kubernetes (AWS EKS) with automated CI evaluation suite\nbenchmarking groundedness (>0.88) and latency via RAGAS.\nTECHNICAL SKILLS\nModel Serving & Runtimes: ONNX Runtime, Hugging Face Transformers, PyTorch, Model Quantization (INT8/FP16), Graph Optimization,\nBatching, vLLM\nVector Retrieval & Search: Redis Vector Search (Cosine Semantic Caching), pgvector, FAISS, Dense Embeddings, BM25 Lexical Search,\nReciprocal Rank Fusion (RRF)\nMLOps & Evaluation Gates: RAGAS, TruLens (Faithfulness, Groundedness, Context Precision), MLflow, CI/CD Evaluation Pipelines,\nOpenTelemetry, Prometheus\nBackend & Streaming Systems: Python (3.11), FastAPI, asyncio, Apache Kafka (Event Streaming), Redis, PostgreSQL (asyncpg), Celery\nDistributed Workers\nCloud & Infrastructure: Docker, Kubernetes (AWS EKS, Helm), Terraform, AWS (EC2, S3, RDS), Git, 99.9% High Availability Production\nArchitectures\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "fullstack-ai-web",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior Full Stack AI Web Engineer",
    "specialization": "Full Stack AI Products & Streaming UX",
    "targetTrack": "fullstack-ai-web",
    "skills": [
      "Python",
      "FastAPI",
      "React.js",
      "TypeScript",
      "Next.js",
      "SSE Streaming",
      "Redis",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker"
    ],
    "metrics": [
      "3,500+ requests/sec",
      "sub-400ms p95",
      "1,111+ LeetCode problems",
      "WBJEE Rank 1160"
    ],
    "recommendedModes": [
      "coding",
      "system-design",
      "backend-architecture",
      "project-deep-dive",
      "behavioral"
    ],
    "summary": "Senior Full Stack AI Web Engineer with 4+ years of verified professional experience building end-to-end AI-native web platforms and high- performance asynchronous backend services. Expert in building modern interfaces with React.js, TypeScript, and Next.js paired with robust Python (FastAPI, asyncio) backends. Proven record of delivering real-time Server-Sent Events (SSE) token streaming, persistent conversational state management, and sustaining 99.9% uptime across ~6M conversations. PROFESSIONAL EXPERIENCE",
    "fullText": "ASHISH RANJAN\nSenior Full Stack AI Web Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior Full Stack AI Web Engineer with 4+ years of verified professional experience building end-to-end AI-native web platforms and high-\nperformance asynchronous backend services. Expert in building modern interfaces with React.js, TypeScript, and Next.js paired with\nrobust Python (FastAPI, asyncio) backends. Proven record of delivering real-time Server-Sent Events (SSE) token streaming, persistent\nconversational state management, and sustaining 99.9% uptime across ~6M conversations.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices powering AI-driven customer support across 14 African\ncountries (~200M subscriber base), sustaining 3,500+ peak RPS at 99.9% uptime.\n\uf0b7 Engineered real-time Server-Sent Events (SSE) token streaming and conversational state management connecting responsive\nweb interfaces for ~6M conversations with sub-400ms p95 latency (42% ticket deflection).\n\uf0b7 Designed intelligent routing and semantic caching on Redis Vector Search (0.88 cosine threshold, 82% hit rate), cutting LLM\ninference costs by 64% ($180K+/year savings).\n\uf0b7 Implemented multilingual Hybrid RAG over 180K+ telecom support documents using dense embeddings, BM25, and\nReciprocal Rank Fusion (RRF) reranking.\n\uf0b7 Orchestrated LangGraph agent workflows with dynamic tool calling, PII redaction, human-in-the-loop approval gates, token-bucket\nrate limiting, and Pydantic structured outputs.\n\uf0b7 Established observability, distributed tracing, and reliability practices (OpenTelemetry, Prometheus, Grafana) across\nKubernetes (AWS EKS, Helm) clusters, sustaining 99.9% uptime.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\nidempotent retries and failure recovery, reducing drafting turnaround by 60%.\n\uf0b7 Structured resilient asynchronous patent-analysis workflows on Celery workers with secure API integrations for interactive frontend\nrendering.\n\uf0b7 Engineered production Hybrid RAG (semantic + BM25 + FAISS), boosting Recall@10 from 0.58 to 0.81 across patent analysis\nworkflows.\n\uf0b7 Optimized inference with Hugging Face Transformers + ONNX Runtime graph optimization, slashing p95 latency by 45% (from\n320ms to 175ms) across interactive drafting workflows.\n\uf0b7 Integrated RAGAS and TruLens into CI/CD to automate evaluation of retrieval quality, groundedness, and faithfulness, enforcing\nquality thresholds before production releases.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered modular multi-agent workflow architecture utilizing LangGraph state graphs, hierarchical ReAct patterns, and bounded\ncyclical reflection loops.\n\uf0b7 Built asynchronous FastAPI inference gateway with React frontend, Redis semantic caching, and Locust load testing\n(benchmarked at 1,200 QPS with sub-50ms cache response).\n\uf0b7 Containerized microservices using Terraform and Helm on Kubernetes (AWS EKS) with automated CI evaluation suite\nbenchmarking groundedness (>0.88) via RAGAS.\nTECHNICAL SKILLS\nFrontend Engineering: React.js, TypeScript, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, State\nManagement\nBackend & Async APIs: Python (3.11), FastAPI, asyncio, Starlette, Uvicorn, RESTful API Design, Server-Sent Events (SSE), WebSockets,\nConnection Pooling\nAI Integration & RAG: LangGraph, LangChain, Redis Vector Search (Cosine Semantic Caching), pgvector, FAISS, BM25 Hybrid RAG, PII\nRedaction, Structured Outputs\nDatabases & Streaming: Apache Kafka (Event Streaming), Redis (Distributed Caching, State Persistence), PostgreSQL (asyncpg,\nIndexing), Celery\nCloud, DevOps & Tools: Docker, Kubernetes (AWS EKS, Helm), Terraform, AWS (S3, RDS, EC2), Git, CI/CD, OpenTelemetry, Prometheus,\nGrafana, 99.9% Uptime\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  },
  {
    "id": "ai-infra-mlops",
    "category": "Python & AI",
    "name": "Ashish Ranjan",
    "role": "Senior AI Infrastructure & MLOps Engineer",
    "specialization": "Kubernetes, Model Serving & Telemetry",
    "targetTrack": "ai-infra-mlops",
    "skills": [
      "Kubernetes (EKS)",
      "Docker",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "vLLM",
      "Apache Kafka",
      "CI/CD",
      "Ray",
      "SLOs/SLAs"
    ],
    "metrics": [
      "99.9% uptime",
      "3,500+ RPS sustained",
      "50% pod footprint reduction",
      "zero message loss with Kafka DLT"
    ],
    "recommendedModes": [
      "system-design",
      "backend-architecture",
      "debugging",
      "project-deep-dive",
      "behavioral"
    ],
    "summary": "Senior AI Infrastructure & MLOps Engineer with 4+ years of verified professional experience architecting scalable AI platforms, automated CI/CD evaluation gates, and cloud-native Kubernetes infrastructure. Expert in establishing enterprise observability (OpenTelemetry, Prometheus, Grafana) sustaining 99.9% uptime, automating GenAI quality gating with RAGAS and TruLens, and slashing LLM operating costs by 64% ($180K+/year) via Redis Vector Search semantic caching across distributed clusters. PROFESSIONAL EXPERIENCE",
    "fullText": "ASHISH RANJAN\nSenior AI Infrastructure & MLOps Engineer\ncandidate@example.com | +1-555-0199 | LinkedIn | GitHub\nPROFESSIONAL SUMMARY\nSenior AI Infrastructure & MLOps Engineer with 4+ years of verified professional experience architecting scalable AI platforms, automated\nCI/CD evaluation gates, and cloud-native Kubernetes infrastructure. Expert in establishing enterprise observability (OpenTelemetry,\nPrometheus, Grafana) sustaining 99.9% uptime, automating GenAI quality gating with RAGAS and TruLens, and slashing LLM operating\ncosts by 64% ($180K+/year) via Redis Vector Search semantic caching across distributed clusters.\nPROFESSIONAL EXPERIENCE\nAirtel International \u2014 Software Engineer (AI Platform) April 2025 \u2013 Present\n\uf0b7 Architected and owned 2 high-throughput Python backend microservices powering AI-driven customer support across 14 African\ncountries (~200M subscriber base), sustaining 3,500+ peak RPS at 99.9% uptime.\n\uf0b7 Established observability, distributed tracing, and reliability practices (OpenTelemetry, Prometheus, Grafana) across\nKubernetes (AWS EKS, Helm) clusters, sustaining 99.9% uptime across production AI clusters.\n\uf0b7 Designed intelligent query routing and semantic caching on Redis Vector Search (0.88 cosine threshold, 82% hit rate), cutting\nLLM inference costs by 64% ($180K+/year savings).\n\uf0b7 Engineered scalable asynchronous processing pipelines and event streaming with Apache Kafka partitioned by conversation ID,\nmanaging conversational state and SSE streaming for ~6M conversations (42% ticket deflection).\n\uf0b7 Implemented multilingual Hybrid RAG over 180K+ telecom support documents using dense embeddings, BM25, and\nReciprocal Rank Fusion (RRF) reranking.\n\uf0b7 Orchestrated LangGraph agent workflows with dynamic tool calling, PII redaction, human approval gates, token-bucket rate\nlimiting, and Pydantic structured output validation.\nDolcera \u2014 Software Engineer October 2022 \u2013 March 2025\n\uf0b7 Integrated RAGAS and TruLens into CI/CD to automate evaluation of retrieval quality, groundedness, and faithfulness, preventing\nquality regressions in production.\n\uf0b7 Architected distributed document-ingestion pipelines (FastAPI, Celery, PostgreSQL) processing 500K+ patent documents with\npre-fork worker pools, idempotent task execution, retries, and dead-letter queues, cutting turnaround by 60%.\n\uf0b7 Engineered production Hybrid RAG (semantic + BM25 + FAISS), boosting Recall@10 from 0.58 to 0.81 across patent analysis\nworkflows.\n\uf0b7 Optimized inference with Hugging Face Transformers + ONNX Runtime graph optimization, slashing p95 latency by 45% (from\n320ms to 175ms) across production pipelines.\n\uf0b7 Structured resilient asynchronous patent-analysis workflows on Celery workers with secure API integrations, failure recovery, and\ntesting standards.\nPROJECTS\nOmniAgent: Distributed Multi-Agent Platform & High-Throughput Serving [GitHub]\n\uf0b7 Engineered modular multi-agent workflow architecture utilizing LangGraph state graphs, hierarchical ReAct patterns, and bounded\ncyclical reflection loops.\n\uf0b7 Automated infrastructure provisioning using Terraform and Helm on Kubernetes (AWS EKS), integrating CI evaluation pipelines\nbenchmarking groundedness (>0.88) via RAGAS.\n\uf0b7 Built asynchronous FastAPI inference gateway with Redis semantic caching and Locust load testing (benchmarked at 1,200 QPS\nwith sub-50ms cache response).\nTECHNICAL SKILLS\nCloud & Container Orchestration: Kubernetes (AWS EKS, Helm), Terraform, Docker, AWS (EC2, S3, RDS), Linux Systems, Cluster\nAutoscaling, Microservices Architecture\nMLOps & Quality Evaluation Gates: RAGAS, TruLens (Faithfulness, Groundedness, Context Relevance), CI/CD Automation (Git,\nPipelines), MLflow, Model Registry\nObservability & Reliability Engineering: OpenTelemetry, Prometheus, Grafana, SLO/SLA Monitoring, Distributed Tracing, Alerting,\n99.9% Uptime Governance\nAI Caching & Data Governance: Redis Vector Search (Cosine Semantic Caching, 64% Cost Reduction), pgvector, FAISS, PII Redaction,\nTool Sandboxing, Rate Limiting\nDistributed Core & Messaging: Python (3.11), FastAPI, asyncio, Apache Kafka (Event Streaming, Partitions, DLQs), Celery Task\nQueues, Redis, PostgreSQL (asyncpg)\nEDUCATION & ACHIEVEMENTS\nJadavpur University \u2014 Bachelor of Engineering in Computer Science & Engineering (GPA: 8.09 / 10.0) 2018 \u2013 2022\n\uf0b7 WBJEE State Rank 1160 (99.2 percentile) among over 150,000 engineering candidates [Rank Card Proof].\n\uf0b7 Competitive Programming: Solved 1,111+ algorithmic problems on LeetCode (peak rating: 1877) and 590+ on Codeforces."
  }
];

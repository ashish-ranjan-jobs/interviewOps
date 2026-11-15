# Senior AI Infrastructure & MLOps Engineer Track

## Who This Is For
Infrastructure and platform engineers managing Kubernetes GPU clusters, automated model deployment pipelines, continuous evaluation, and high-scale observability.

## Expected Skills
- Kubernetes (AWS EKS, GPU worker nodes, Karpenter autoscaling)
- Docker, Helm, Terraform, CI/CD pipeline automation (GitHub Actions / GitLab CI)
- Prometheus, Grafana, OpenTelemetry distributed tracing, alertmanager
- Apache Kafka event streaming, Ray, vLLM deployment, model registries (MLflow / Hugging Face)
- SLO/SLA management: 99.9% uptime, p95/p99 latency dashboards, GPU utilization tuning

## Interview Focus Areas
1. Maintaining 99.9% platform availability across multi-region EKS clusters
2. Automating canary model deployments with automated rollbacks on latency/error thresholds
3. Instrumenting end-to-end distributed tracing across API gateways, queues, and model inference
4. GPU node auto-scaling and cost governance for variable traffic spikes

## Key Production Interview Questions
- How do you configure Kubernetes Karpenter or Cluster Autoscaler to rapidly provision GPU nodes during sudden traffic spikes without excessive idle costs?
- Walk me through your Prometheus and OpenTelemetry observability setup for tracking TTFT, GPU memory utilization, and p99 latency in production.
- How do you implement zero-downtime canary deployments for large language models with automated rollbacks on evaluation score drops?
- Describe how you engineered zero message loss in an event-driven AI pipeline using Kafka partition replication and dead-letter queues.

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

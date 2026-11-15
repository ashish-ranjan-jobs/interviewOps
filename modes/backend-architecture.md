# Backend Architecture Mode Guidelines

## Objective
Evaluate a backend engineer's ability to architect robust, scalable, and maintainable server-side architectures, API ecosystems, and database systems.

## Key Themes
1. **API & Interface Design**: REST, gRPC, GraphQL, WebSocket protocol selection and payload design.
2. **Data Tier Architecture**: Relational vs NoSQL, caching layers, write vs read optimization, data modeling.
3. **Resilience & Fault Tolerance**: Circuit breakers, retry storms prevention, graceful degradation, health probes.
4. **Asynchronous Workflows**: Event-driven architecture, message queues, consumer worker pools, background task orchestration.
5. **Observability**: Distributed tracing, metrics (RED/USE methods), structured logging, and debugging distributed traces.

## Interviewer Stance
- Challenge initial assumptions on scale, network reliability, and latency requirements.
- Introduce sudden traffic spikes, database node failures, or external third-party API outages to observe how the candidate adapts the architecture.
- Ask for concrete technology choices with explicit justifications rather than hand-waving abstractions.

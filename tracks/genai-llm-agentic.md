# Senior GenAI, LLM & Agentic AI Engineer Track

## Who This Is For
AI engineers building advanced agentic systems, multi-agent collaboration with LangGraph, production RAG pipelines, tool execution, and prompt evaluation.

## Expected Skills
- LangGraph, LangChain, LlamaIndex, AutoGen
- Hybrid RAG (Vector + BM25, Cohere reranking, contextual compression)
- Tool Calling & Function Calling, Structured Outputs with Pydantic
- Redis Vector Search, Pinecone, Qdrant, Chroma
- RAGAS evaluation framework, TruLens, LangSmith tracing
- Prompt engineering: Few-shot, Chain-of-Thought (CoT), ReAct framework

## Interview Focus Areas
1. Multi-agent supervisor and hierarchical agent coordination patterns in LangGraph
2. Improving RAG retrieval recall from 0.58 to 0.81 via hybrid search and cross-encoder reranking
3. Mitigating hallucinations and enforcing deterministic schema contracts from non-deterministic LLMs
4. Evaluating RAG systems at scale using synthetic test datasets and RAGAS metrics

## Key Production Interview Questions
- Explain how LangGraph manages state across cyclic agent interactions. How do you prevent infinite loops and ensure deterministic execution?
- How did you improve RAG Recall@10 from 0.58 to 0.81 in production? Walk me through your chunking strategy, embedding models, and reranker choices.
- How do you handle tool execution failures and schema validation errors when an LLM hallucinate arguments?
- What automated evaluation pipeline do you put in place to catch model regressions before deploying a new system prompt to production?

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

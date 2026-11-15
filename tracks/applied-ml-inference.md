# Senior Applied ML & Inference Engineer Track

## Who This Is For
Machine learning systems engineers focused on low-latency inference serving, model quantization, KV cache optimization, and high-throughput model hosting.

## Expected Skills
- vLLM (PagedAttention, continuous batching, chunked prefill)
- Triton Inference Server, ONNX Runtime, TensorRT-LLM
- PyTorch, CUDA, GPU memory profiling, mixed-precision (FP16/BF16/INT8/FP8)
- Hugging Face Transformers, SentenceTransformers, embedding optimization
- FastAPI async serving, Redis Vector Search, Kubernetes GPU scheduling

## Interview Focus Areas
1. Cutting inference latency by 45% (from 320ms to 175ms)
2. Continuous batching and PagedAttention memory optimization under 1,200 QPS workloads
3. Serving fine-tuned embedding and generative models with high throughput and low TTFT
4. GPU memory fragmentation triage and multi-GPU tensor parallelism

## Key Production Interview Questions
- How does vLLM's PagedAttention eliminate memory fragmentation in the KV cache, and how does it enable continuous batching?
- How did you optimize inference latency from 320ms to 175ms? What profiling tools and model optimizations (quantization, kernel fusion) did you apply?
- Compare Triton Inference Server with vLLM for serving mixed embedding and generative LLM workloads.
- How do you measure Time to First Token (TTFT) vs Inter-Token Latency (ITL), and which architectural components impact each?

## Seniority Expectations
At Senior & Staff level for this track, interviewers expect:
- Deep empirical command of systems you designed, with exact metrics and latency breakdowns.
- Clear articulation of trade-offs (e.g., consistency vs latency, memory footprint vs CPU overhead).
- Proactive identification of production failure modes and disaster recovery runbooks.
- Strong cross-functional technical leadership and setting architectural standards.

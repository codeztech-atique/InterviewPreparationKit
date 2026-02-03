Concurrency (Interview Primer)

Short checklist of concurrency topics, patterns, and quick examples to practice for interviews.

## Key concepts
- Processes vs threads
- Race conditions, atomicity, memory visibility
- Locks / Mutexes, Semaphores, Condition variables
- Deadlock, livelock, starvation
- Lock-free programming / atomic operations
- Memory model and ordering (high-level awareness)

## Common patterns & problems
- Producer-consumer (bounded buffer)
- Readers-writers
- Thread-safe queue / stack
- Concurrent caches (sharding, locking strategies)
- Work-stealing / thread pools

## Interview-style tasks
- Implement a thread-safe counter (lock vs atomic)
- Design a concurrent queue (blocking enqueue/dequeue)
- Detect and fix a deadlock in given code
- Design a concurrent LRU cache for heavy read-write workload

## Short JS/TS pseudo-note
This repo is JS/TS-heavy; concurrency interview answers should mention language-specific primitives (Java: `synchronized`, `volatile`, `ConcurrentHashMap`; C++: `std::mutex`, `std::atomic`). Use these talking points in answers.

## What to practice
- Explain trade-offs: coarse-grained vs fine-grained locking
- Show how to avoid deadlock (lock ordering, try-lock + backoff)
- Do 3 worked examples: producer-consumer, concurrent cache, deadlock debugging

## Quick interview questions to rehearse
- How would you implement a thread-safe counter? (lock vs atomic)
- How to implement a bounded blocking queue?
- How to design a concurrent LRU cache with high read throughput?
- Explain a deadlock scenario and mitigation strategies.

Frequently Asked Problems - 

| #  | Problem                                   |  Status  | Why here / What you’ll practice                 | Key Patterns                                |
| -- | ----------------------------------------- | :------: | ----------------------------------------------- | ------------------------------------------- |
| 1  | **Parking Lot**                           |  ✅ Done  | Capacity, tickets, pricing, receipts            | Singleton (config), Strategy (pricing), Map |
| 2  | **Vending Machine**                       | ❌ Undone | Core **State Machine**, money/change, inventory | State, Strategy, Command                    |
| 3  | **Tic-Tac-Toe Game**                      | ❌ Undone | Board model, win checks, AI strategy            | OO modeling, Strategy (AI), Observer        |
| 4  | **Logging System**                        | ❌ Undone | Levels, appenders, formatters, async sinks      | Singleton, Strategy, Observer               |
| 5  | **Cache (LRU/LFU)**                       | ❌ Undone | O(1) DS, eviction policy                        | Strategy (eviction), Decorator/Adapter      |
| 6  | **Rate Limiter**                          | ❌ Undone | Token/Leaky Bucket, concurrency                 | Sliding Window, Strategy                    |
| 7  | **URL Shortener (TinyURL)**               | ❌ Undone | IDs, hashing, TTL                               | Factory, Repository, Strategy (hash)        |
| 8  | **File System**                           | ❌ Undone | Directories, permissions, recursion             | Composite, Iterator, Command                |
| 9  | **Pub-Sub (Kafka-like)**                  | ❌ Undone | Topics, partitions, offsets                     | Observer, Strategy (partitioner), Queueing  |
| 10 | **Elevator System**                       | ❌ Undone | Multi-car scheduling, direction logic           | State, Strategy (scheduler), Priority Queue |
| 11 | **Car Rental**                            | ❌ Undone | Reservations, pricing, availability             | Domain Modeling, Factory, Strategy          |
| 12 | **Inventory Management**                  | ❌ Undone | Stock updates, events                           | Observer, CQRS/Eventing                     |
| 13 | **ATM Machine**                           | ❌ Undone | Transaction flow, dispense notes                | State, Strategy (dispense), Facade          |
| 14 | **Movie Ticket Booking**                  | ❌ Undone | Seat holds, payments, expiry                    | Reservation/Locking, Strategy (pricing)     |
| 15 | **Web Crawler**                           | ❌ Undone | Fetch, parse, dedupe, politeness                | BFS/DFS, Rate Limiting, Pipeline            |
| 16 | **WhatsApp (Chat App)**                   | ❌ Undone | Messaging, presence, media                      | Pub-Sub, Event Sourcing, Caching            |
| 17 | **Leaderboard / Ranking**                 | ❌ Undone | Top-K, rolling windows                          | Heap/Tree, Sliding Window                   |
| 18 | **Autocomplete / Search Suggest**         | ❌ Undone | Prefix search, ranking                          | Trie, Scoring Strategy, Caching             |
| 19 | **Payment / Checkout System**             | ❌ Undone | Idempotency, retries, refunds                   | Saga/Orchestration, State, Strategy         |
| 20 | **Notification Service (Email/SMS/Push)** | ❌ Undone | Fan-out, retries, templates                     | Observer, Retry/Backoff, Circuit Breaker    |


Design Patterns - 

i) Creational Patterns (How books/libraries are created)
ii) Structural Patterns (How books/libraries are arranged)
iii) Behavioral Patterns (How books/libraries behave)

✅ This way every pattern = Library & Book story.
You just imagine:

Creational = how we create/manage books.

Structural = how books/shelves/libraries are arranged.

Behavioral = how they act, notify, change, or process.

🎯 Top Design Patterns for Interviews

🏗 Creational Patterns (How objects are created)

1. Singleton

When to use: When you need only one global instance shared across the system.

Real-world: Database connection pool, global config manager, metrics client.

Why asked: Tests understanding of managing global state, thread-safety, and hidden dependencies.

2. Factory (Factory Method / Abstract Factory)

When to use: When object creation logic should be abstracted from client code.

Real-world: DB client factory (MongoDB vs PostgreSQL), cloud storage providers (S3, GCS, Azure Blob).

Why asked: Checks if you know how to decouple creation logic and design extensible systems.

🏛 Structural Patterns (How objects are composed/arranged)

3. Facade

When to use: When you want to simplify a complex subsystem with a clean interface.

Real-world: Payment service that internally calls billing, notifications, and ledger services.

Why asked: Companies want to see if you can design APIs that make complex systems easy to use.

4. Decorator

When to use: When you need to add cross-cutting behavior without modifying the original code.

Real-world: Adding logging, caching, retries, or metrics around an HTTP service.

Why asked: Tests whether you understand extensibility without breaking existing code.

5. Proxy

When to use: When you need controlled access to an object (security, caching, rate-limiting).

Real-world: API gateway proxy, lazy-loading images in frontend, caching proxy in backend.

Why asked: Demonstrates thinking around scalability, performance optimization, and access control.

🤝 Behavioral Patterns (How objects interact/behave)

6. Strategy

When to use: When you want to swap algorithms or business logic at runtime.

Real-world: Payment providers (PayPal, Stripe, Razorpay), caching policies (LRU, LFU), load-balancing strategies.

Why asked: Shows you can design for extensibility and avoid long if/else chains.

7. Observer (Pub/Sub)

When to use: When multiple systems/components need to react to a single event.

Real-world: Event-driven systems (Kafka, RabbitMQ, EventBridge), notification systems, webhooks.

Why asked: Checks if you understand decoupling via events, which is core to microservices and distributed systems.

8. Command

When to use: When actions should be represented as objects (to support undo, logging, retry).

Real-world: Task queues, job scheduling, audit logging, redo/undo functionality.

Why asked: Evaluates your ability to design systems with retryability, auditability, and history tracking.

🏆 Key Takeaways

Creational → How you make things (Singleton, Factory).

Structural → How you arrange things (Facade, Decorator, Proxy).

Behavioral → How things interact (Strategy, Observer, Command).

👉 In interviews, they ask these because they map directly to large-scale systems you’ll design as a Staff Engineer/EM.
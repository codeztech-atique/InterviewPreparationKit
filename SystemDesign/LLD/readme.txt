npm init -y
npm i -D typescript tsx @types/node
npx tsc --init

tsconfig.json

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "types": ["node"],
    "lib": ["ES2022"],
    "skipLibCheck": true
  },
  "include": ["src"]
}

Difference Between public, private, and protected

public → A public variable or method can be accessed from anywhere — inside the class, outside the class, or by derived (child) classes. This is the most open level of access.
private → A private variable or method can be accessed only within the same class where it is defined. It cannot be accessed from outside the class or by derived classes. This is the most restrictive access modifier.
protected → A protected variable or method can be accessed within the same class and also by its child (derived) classes. However, it cannot be accessed directly from outside those classes.

👉 In short:

public → accessible everywhere
private → accessible only inside the class
protected → accessible inside the class and in child classes

CREATIONAL ───────────────┐
 Factory | Builder | Singleton | Prototype | AbstractFactory
STRUCTURAL ───────────────┐
 Adapter | Decorator | Proxy | Facade | Composite | Bridge
BEHAVIORAL ──────────────┐
 Strategy | Observer | Chain | Command | State | Template | Mediator
ENTERPRISE ─────────────┐
 Repository | DI | Event Sourcing | CQRS | Service Locator


| #  | Topic / Feature                                 | Problem Statement                                                            | Core Concepts Tested                       |
| -- | ----------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| 1  | **Parking Lot System**                          | Design a parking lot for different vehicle types, entry/exit gates, payments | Classes, Inheritance, Strategy pattern     |
| 2  | **Splitwise / Expense Sharing App**             | Design a system to manage group expenses                                     | Observer, Strategy, Data consistency       |
| 3  | **BookMyShow / Movie Ticket Booking**           | Handle seat reservation, cancellations                                       | Concurrency, Locking, DB consistency       |
| 4  | **Elevator System**                             | Manage multiple elevators serving requests                                   | State machine, Scheduling, Observer        |
| 5  | **Cab Booking (Uber/Ola)**                      | Match riders and drivers, track locations                                    | Publisher-Subscriber, Strategy, Geohashing |
| 6  | **ATM Machine**                                 | Design ATM workflow (withdraw, deposit)                                      | State pattern, Composition, Encapsulation  |
| 7  | **Logger Utility**                              | Design a scalable logger supporting multiple log levels                      | Singleton, Chain of Responsibility         |
| 8  | **Cache System (LRU / LFU)**                    | Implement LRU/LFU cache                                                      | Linked List, HashMap, eviction strategy    |
| 9  | **Notification Service**                        | Email/SMS/push notifications                                                 | Observer, Factory, Retry mechanism         |
| 10 | **Library Management System**                   | Manage books, members, check-in/out                                          | OOP, Composition, Aggregation              |
| 11 | **Rate Limiter**                                | Design a rate limiter for APIs                                               | Token bucket, Leaky bucket, Thread safety  |
| 12 | **Hotel Management System**                     | Manage rooms, bookings, payments                                             | DB modeling, State pattern                 |
| 13 | **Online Food Ordering (Zomato/Swiggy)**        | Order creation, delivery tracking                                            | Event-driven, Observer, Queue              |
| 14 | **Task Scheduler (like Cron)**                  | Execute jobs periodically                                                    | Threading, Timer, Priority queue           |
| 15 | **Chat Application (WhatsApp)**                 | Private/group chat design                                                    | WebSocket, Message queue, Observer         |
| 16 | **Notification Aggregator (Inbox)**             | Consolidate alerts from multiple services                                    | Observer, Decorator, Adapter               |
| 17 | **File Storage System (Google Drive)**          | File hierarchy, sharing, permissions                                         | Composite, Access control                  |
| 18 | **URL Shortener**                               | Shorten long URLs, handle redirection                                        | Hashing, DB index design                   |
| 19 | **Online Shopping Cart**                        | Add/remove products, checkout flow                                           | Strategy, Aggregation, Pricing engine      |
| 20 | **Social Media Feed (Instagram)**               | Design post/feed system                                                      | Observer, Cache, Pagination                |
| 21 | **Document Version Control (Google Docs)**      | Manage versions and concurrent edits                                         | Diff algorithm, Locking, Sync              |
| 22 | **Email Service (Gmail)**                       | Threaded emails, attachments                                                 | Composite, State, Caching                  |
| 23 | **Vending Machine**                             | Handle inventory and payment flow                                            | State, Strategy, Exception handling        |
| 24 | **Payment Gateway (Stripe/PayPal)**             | Design payment processing                                                    | Transaction, Retry, Event queue            |
| 25 | **Inventory Management System**                 | Track products and stock levels                                              | DB schema, Observer, Transactions          |
| 26 | **Message Queue (Kafka-like)**                  | Topic, partition, consumer model                                             | Concurrency, Producer-Consumer             |
| 27 | **Analytics Tracker (Google Analytics)**        | Event collection and aggregation                                             | Observer, Aggregator pattern               |
| 28 | **Leaderboard / Ranking System**                | Maintain player scores                                                       | Heap, TreeMap, Cache consistency           |
| 29 | **Search Autocomplete**                         | Suggest words based on prefix                                                | Trie, Cache, Ranking                       |
| 30 | **File System**                                 | Directory tree, file read/write                                              | Composite, Iterator, Memory mapping        |
| 31 | **E-commerce Coupon Engine**                    | Apply multiple discounts                                                     | Strategy, Chain of Responsibility          |
| 32 | **Metrics Collector (Prometheus-like)**         | Collect and query system metrics                                             | Observer, Data pipeline                    |
| 33 | **Job Application Portal (LinkedIn)**           | Candidate, recruiter interactions                                            | Relational mapping, State transitions      |
| 34 | **Online Whiteboard (Miro)**                    | Collaborative drawing, sync                                                  | Event sourcing, WebSocket                  |
| 35 | **Streaming Service (Netflix)**                 | Manage user sessions, streaming                                              | CDN, Cache, Session handling               |
| 36 | **Bank Account System**                         | Transfers, statements                                                        | Transaction, ACID, Locking                 |
| 37 | **Calendar / Scheduler (Google Calendar)**      | Events, conflicts, reminders                                                 | Observer, Recurrence logic                 |
| 38 | **Notification Retry Mechanism**                | Retry with exponential backoff                                               | Retry policy, Strategy                     |
| 39 | **API Gateway Router**                          | Handle routing, throttling                                                   | Chain of Responsibility                    |
| 40 | **Game Matchmaking System**                     | Match players by skill level                                                 | Strategy, Priority queue                   |
| 41 | **Auction System (eBay)**                       | Real-time bidding system                                                     | Concurrency, Observer                      |
| 42 | **Content Recommendation System**               | Suggest content to users                                                     | Strategy, ML interface, Ranking            |
| 43 | **IoT Device Manager**                          | Manage sensors and device data                                               | Observer, Pub/Sub                          |
| 44 | **Document Collaboration**                      | Real-time text editing                                                       | Operational transform, Diff merge          |
| 45 | **CI/CD Pipeline Manager (GitHub Actions)**     | Manage workflows and steps                                                   | DAG, State machine                         |
| 46 | **Alerting System (PagerDuty-like)**            | Manage alerts, escalations                                                   | Observer, Chain of Responsibility          |
| 47 | **Feature Flag System**                         | Enable/disable features dynamically                                          | Strategy, Config service                   |
| 48 | **Multi-Tenant SaaS System**                    | Tenant isolation, auth, config                                               | Multi-DB design, Context pattern           |
| 49 | **Command Bus / Event Dispatcher**              | Central command routing                                                      | Command pattern, Mediator                  |
| 50 | **AI Chatbot Platform (like your Analyze24x7)** | Multi-agent orchestration, KB, RAG                                           | Agent pattern, Memory, Context propagation |


| #  | System / Problem                 | Core Challenges            | Key Components                  | Topics to Practice                   |
| -- | -------------------------------- | -------------------------- | ------------------------------- | ------------------------------------ |
| 1  | URL Shortener (TinyURL)          | Hot keys, redirects        | API, KV store, cache, DB, CDN   | hashing, sharding, TTL, read caching |
| 2  | Pastebin/Gist                    | Large blobs, abuse control | API, object store, metadata DB  | object storage, CDN, quotas, abuse   |
| 3  | Instagram-like Photos            | Write-heavy, fanout        | Upload svc, CDN, feed svc, DB   | media storage, fanout, denorm feeds  |
| 4  | Twitter/X Timeline               | Fanout/fanin at scale      | Timeline svc, cache, MQ, DB     | fanout-on-write vs read, ranking     |
| 5  | Facebook/LinkedIn Feed           | Relevance, personalization | Feed gen, ranking, graph store  | ranking, signals, cold start         |
| 6  | WhatsApp/Signal (1-1)            | Ordering, E2E, offline     | Gateway, msg store, push, MQ    | delivery semantics, idempotency      |
| 7  | Slack/Discord (Channels)         | Multi-tenant realtime      | WS gateway, presence, history   | pub/sub, partitioning, backlog       |
| 8  | Presence & Typing                | Low latency, flaps         | Presence svc, WS, cache         | heartbeats, debouncing, expiry       |
| 9  | Uber-like Ride Hailing           | Matching, ETA, pricing     | Driver loc svc, match svc, DB   | geohash, proximity search, surge     |
| 10 | Food Delivery (Zomato)           | Multi-party states         | Order svc, courier svc, maps    | state machines, tracking, SLA        |
| 11 | Tinder Swipe/Match               | Real-time matching         | Swipe svc, match svc, cache     | candidate gen, rate limit, abuse     |
| 12 | Zoom/Meet                        | Low latency media          | SFU/MCU, signaling, TURN        | WebRTC, NAT traversal, QoS           |
| 13 | YouTube Platform                 | Storage, throughput        | Transcoder, CDN, catalog        | chunking, cold vs hot content        |
| 14 | Netflix-style VOD                | ABR streaming, DRM         | Packager, CDN, license svc      | ABR, pre-warm, regional failover     |
| 15 | TikTok/Reels Feed                | Short-video virality       | Recs, ranking, feature store    | CTR optimization, feature cache      |
| 16 | Stories/Status                   | Expiring media             | Story svc, TTL cache, CDN       | TTL design, fanout, privacy          |
| 17 | Google Drive/Dropbox             | Sync, conflict, share      | Sync svc, obj store, metadata   | delta sync, locks, sharing ACL       |
| 18 | Gmail-like Email                 | Spam, search, quota        | SMTP, inbox svc, indexer        | IMAP/POP, inverted index, spam       |
| 19 | Notification Platform            | Multi-channel, retries     | Fanout svc, provider adapters   | retries, DLQ, templates, opt-out     |
| 20 | Rate Limiter/Quota               | Fairness, bursts           | Token bucket svc, cache         | leaky vs token, sliding window       |
| 21 | API Gateway                      | Auth, routing, limits      | Gateway, authN, authZ, WAF      | JWT/OIDC, throttling, canaries       |
| 22 | Load Balancer/SD                 | Health, consistent hash    | L4/L7 LB, registry              | heartbeats, hashing, outliers        |
| 23 | Web Crawler + Indexer            | Politeness, scale          | Fetcher, parser, indexer        | BFS/priority, robots.txt, dedup      |
| 24 | Search Autocomplete              | Latency, prefix match      | Trie/suffix array, cache        | tries, FSTs, caching strategies      |
| 25 | Ads Serving & Clicks             | Low-latency, pacing        | Ad server, auction, logs        | auctions, budgets, at-least-once     |
| 26 | Payments & Wallet                | Idempotency, recon         | PSP adapters, ledger, webhooks  | double-entry, saga, PCI basics       |
| 27 | Ticketing/Booking                | Oversell, locks            | Inventory svc, queue, DB        | pessimistic/optimistic locking       |
| 28 | Calendar & Scheduling            | Conflicts, timezones       | Cal svc, ICS, reminders         | i18n time, recurrence rules          |
| 29 | CDN Design                       | Cache hierarchy            | POPs, origin shield, purge      | cache keys, invalidation, TTL        |
| 30 | S3-like Object Store             | Durability, EC             | Gateway, chunker, storage nodes | erasure coding, consistency          |
| 31 | Log Aggregation                  | Volume, schema             | Shippers, brokers, index        | back-pressure, retention tiers       |
| 32 | Metrics & Monitoring             | Cardinality, alerts        | TSDB, rule engine, exporters    | TSDB compaction, alert noise         |
| 33 | Analytics Pipeline               | Hot vs cold paths          | Stream proc, batch, lake        | Lambda/Kappa, watermarking           |
| 34 | Real-time Leaderboard            | Ordering, fairness         | Score svc, cache, DB            | sorted sets, rank windows            |
| 35 | News Aggregator                  | Dedup, ranking             | Feeds fetcher, NLP, ranker      | dedup signals, freshness             |
| 36 | Stock Trading (OMS)              | Matching, latency          | Order book, matcher, risk       | price-time priority, durability      |
| 37 | Crypto Exchange                  | Wallets, custody           | Matcher, hot/cold wallets       | confirmations, chain reorgs          |
| 38 | Collaborative Docs               | OT/CRDT, conflicts         | Collab svc, cursor svc          | OT vs CRDT, merges, latency          |
| 39 | Git Hosting/PRs                  | Diffs, refs, scale         | Repo storage, CI hooks          | packfiles, webhooks, ACL             |
| 40 | CI/CD Service                    | Isolation, scaling         | Runner fleet, queue, cache      | sandboxing, cache keys, quotas       |
| 41 | Feature Flags / A/B              | Targeting, exposure        | Flag svc, evaluation SDK        | bucketing, metrics, guardrails       |
| 42 | Task Queue / Scheduler           | Ordering, retries          | Queue, workers, DLQ             | visibility timeouts, idempotency     |
| 43 | Recommendation System            | Signals, features          | Feat store, ranker, retriever   | offline/online, freshness            |
| 44 | Full-Text Search                 | Relevance, shards          | Indexer, query coord, cache     | inverted index, shard/replica        |
| 45 | E-commerce Cart/Checkout         | Consistency, promos        | Cart svc, pricing, payments     | cart merge, promo stacking           |
| 46 | Inventory & Orders               | Race conditions            | Inventory svc, reserv svc       | reservation windows, SAGA            |
| 47 | AuthN/AuthZ + SSO                | Federation, sessions       | IdP, OIDC/OAuth, session svc    | tokens, refresh, MFA, RBAC/ABAC      |
| 48 | Secrets/Config Mgmt              | Rotation, scope            | KMS/HSM, config svc             | envelope encryption, versioning      |
| 49 | Audit Logging/Trails             | Immutability               | Append-only store, signer       | tamper-evidence, retention           |
| 50 | Media Pipeline (Thumb/Transcode) | Throughput, formats        | Ingest, transcode farm, CDN     | batch vs stream, presets, queues     |



ALB - Application Load balancer
API Gateway 

ALB - Support HTTP and HTTPS && It will give you the static API, Cost is high

API Gateway - Supports only HTTPS, and It does not give any static IP, you can add your endpoint. 

Synchronous Architecture - ( All the services needs to scale together )

User --> API gateway ---> Lambda ---> Dynamodb 

Asyc or Event-Driven Achitechture - ( All the component does not need to scale all together - Because of SQS -- DLQ )

User --> API gateway ---> Messaging Queue ( SQS ) ---> Lambda ---> Dynamodb


It is stronger when it is working together.

# Queue - SQS

( Pub sub Architechture - Example - SNS, Event Bridge )
User publish the topic - (A) ---- The use those who are subscribe to it, they will get notification about the topic 


# Messaging VS Streaming 

Messaging
A -- SQS --- B

# Cache - Redis - Better AWS Elastic Cache


# High Availability 

It should be always available, If any small services went down or stop working.

If is a EC2 - On the top load balancer, In order to highly available, we deploy it under auto scalling group. 

# Fault tolerance - 
If we have EC2 on top of Auto Scallng Load balacer, Even if the any system is down, performace should  slowdown. 

# Streaming 
Website Click Stream --> Kinesis --> B


# Centralized System scalling --

2 or More Client are talking to 1 server. How I can scale, need to increase the CPU and memory.


# Distributed System scalling --

Our application are in different server, and on the top of Load Balancer and on the top of Auto Scalling Group. If 1 went down, it can be easily managable. 


# Hasing ----

Dynamodb background all the data are store in partitions. When ever we do query or get any item, Based the primary Key, Hash function will tell you, which partition to go and fetch the exact record. 

# Sharding - 

1 is primary node - 2 secodary node. and there is a heartbeat signal between them. Each the every share data will be segrigated. --- This is the important point. 

When any request come to fetch - It will go though the hasing function, from there it will get a sharded key. From there it can rectify, which share the data will exists. Where there is a write operation, which share there is a less data, there the write operation will happen. 

# Sharding and Replication - 

If you have three nodes with one primary and two secondary nodes, the data on the primary node should be replicated to the secondary nodes. The purpose of replication is to ensure that changes made on the primary node are propagated to the secondary nodes, maintaining consistency.

However, the distribution of sharded data might mean that the primary node handles a specific shard or set of shards, and the secondary nodes replicate the data associated with those shards.


# DR - Disaster Recovery Strategy - 

Solution 1 - Active & Active strategy - Where you will have same database in a diff region in AWS.
RPO - Recovery Point Objectives - Reduce time, --- Every 10 minutes we need to do a database backup.
Here we need to think about replication. 


# CAP - Theorem
C - Consistency
A - Availability
P - Partition Tolerance - System continues to operate n of messages. ( Replication example - Any thing comes to primary node, it should replicate to secondary node too. )


# Content based Messaging system
                                                  ======== SQS ( CAR ) ---> Lambda
User1 --> (Send message) --> EventBus or SNS ---> ======== SQS ( Bike ) ---> Lambda
                                                  ======== SQS ( Cycle ) ---> Lambda


# Storing Image in S3 ( Creating like Tinder )

User ---> Upload image (Muti upload/single upload) --> API Gateway --> Run amazon rekognition tool -->  S3 --> Lambda ---> compress image --> ( And store into diff S3 buckets )



              
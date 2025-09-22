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

📌 100 Low Level Design Problem Statements

| #   | Problem Statement                                                       | Category          | Difficulty |
| --- | ----------------------------------------------------------------------- | ----------------- | ---------- |
| 1   | Design a Parking Lot system with different vehicle types and slots      | System Simulation | Easy       |
| 2   | Design a Library Management System (books, users, borrowing, penalties) | System Simulation | Medium     |
| 3   | Design a Hotel/Room Booking System                                      | Booking           | Medium     |
| 4   | Design BookMyShow (movie ticket booking system)                         | Booking           | Medium     |
| 5   | Design a Splitwise-like expense sharing system                          | Finance           | Medium     |
| 6   | Design an Elevator System                                               | System Simulation | Hard       |
| 7   | Design a Snake and Ladder game                                          | Game              | Easy       |
| 8   | Design a Chess game                                                     | Game              | Hard       |
| 9   | Design a Tic-Tac-Toe game with undo/redo                                | Game              | Medium     |
| 10  | Design a Cricket Scoreboard System (CricBuzz)                           | Sports            | Medium     |
| 11  | Design an ATM Machine simulation                                        | Finance           | Medium     |
| 12  | Design a Vending Machine                                                | Retail            | Easy       |
| 13  | Design a Coffee Machine                                                 | Retail            | Easy       |
| 14  | Design a Food Delivery system (like Zomato/Swiggy)                      | Ordering          | Hard       |
| 15  | Design an Online Shopping Cart (Amazon/Flipkart)                        | E-commerce        | Medium     |
| 16  | Design an Inventory Management System                                   | E-commerce        | Medium     |
| 17  | Design a Coupon/Discount system                                         | E-commerce        | Medium     |
| 18  | Design a Rate Limiter (token bucket, leaky bucket)                      | Infra/DS          | Medium     |
| 19  | Design a Cache (LRU, LFU, MRU)                                          | Infra/DS          | Medium     |
| 20  | Design a Pub-Sub Event System                                           | Infra/DS          | Hard       |
| 21  | Design a Logging System with log levels                                 | Infra/DS          | Easy       |
| 22  | Design a File System (with CRUD, directory structure)                   | Storage           | Hard       |
| 23  | Design a URL Shortener (like bit.ly)                                    | Web               | Medium     |
| 24  | Design a Notification System (email, SMS, push)                         | Web               | Medium     |
| 25  | Design a Payment Wallet (Paytm, Venmo)                                  | Finance           | Medium     |
| 26  | Design a Digital Wallet with credit/debit/limits                        | Finance           | Hard       |
| 27  | Design a Transaction Manager with rollback                              | Finance           | Hard       |
| 28  | Design a Ride Sharing system (Uber/Ola)                                 | Mobility          | Hard       |
| 29  | Design a Cab Payment system                                             | Mobility          | Medium     |
| 30  | Design a Railway Reservation system (IRCTC)                             | Booking           | Hard       |
| 31  | Design a Bus Ticket Booking system                                      | Booking           | Medium     |
| 32  | Design a Flight Booking system                                          | Booking           | Hard       |
| 33  | Design a Calendar System (like Google Calendar)                         | Productivity      | Medium     |
| 34  | Design a Meeting Scheduler                                              | Productivity      | Medium     |
| 35  | Design a Reminder/Alarm app                                             | Productivity      | Easy       |
| 36  | Design a Job Scheduler (cron style)                                     | Infra/DS          | Hard       |
| 37  | Design an Email Client (like Gmail basic features)                      | Communication     | Hard       |
| 38  | Design a Chat Application (like WhatsApp/Slack)                         | Communication     | Hard       |
| 39  | Design Group Chat with admins, bans, etc.                               | Communication     | Hard       |
| 40  | Design a Forum/Discussion Board (like Reddit)                           | Communication     | Medium     |
| 41  | Design a Blogging Platform (like Medium)                                | Content           | Medium     |
| 42  | Design a News Feed system (like Facebook/Twitter)                       | Social Media      | Hard       |
| 43  | Design a Like/Comment System                                            | Social Media      | Easy       |
| 44  | Design a Follower/Following system (Twitter)                            | Social Media      | Medium     |
| 45  | Design a Post Sharing System (Instagram)                                | Social Media      | Medium     |
| 46  | Design a Video Streaming System (YouTube/Netflix basic)                 | Media             | Hard       |
| 47  | Design a Music Player (Spotify basic)                                   | Media             | Medium     |
| 48  | Design a Playlist Manager                                               | Media             | Easy       |
| 49  | Design an Online Examination System                                     | Education         | Medium     |
| 50  | Design a Quiz Platform (Kahoot style)                                   | Education         | Medium     |
| 51  | Design a Student Course Registration system                             | Education         | Medium     |
| 52  | Design a Learning Management System (LMS)                               | Education         | Medium     |
| 53  | Design a Logging & Monitoring Dashboard                                 | Infra             | Medium     |
| 54  | Design a Metrics Collector (Prometheus style)                           | Infra             | Hard       |
| 55  | Design an Online Polling/Voting system                                  | Misc              | Easy       |
| 56  | Design a Survey Application                                             | Misc              | Medium     |
| 57  | Design a Document Collaboration system (Google Docs basic)              | Productivity      | Hard       |
| 58  | Design a Version Control System (Git basic)                             | DevTools          | Hard       |
| 59  | Design a Code Editor with undo/redo                                     | DevTools          | Medium     |
| 60  | Design a Build System (like Makefile simplified)                        | DevTools          | Hard       |
| 61  | Design a Leaderboard/Ranking system (games/contests)                    | Gaming            | Medium     |
| 62  | Design a Tournament Bracket system                                      | Gaming            | Medium     |
| 63  | Design a Fantasy Sports Platform                                        | Gaming            | Hard       |
| 64  | Design a Weather Alert system                                           | IoT/Web           | Medium     |
| 65  | Design a Smart Home Automation system                                   | IoT               | Medium     |
| 66  | Design a Stock Trading System (basic)                                   | Finance           | Hard       |
| 67  | Design a Crypto Exchange (simplified)                                   | Finance           | Hard       |
| 68  | Design a Fraud Detection system                                         | Finance           | Hard       |
| 69  | Design an Insurance Claim Processing System                             | Finance           | Medium     |
| 70  | Design a Healthcare Appointment System                                  | Healthcare        | Medium     |
| 71  | Design a Patient Record Management System                               | Healthcare        | Medium     |
| 72  | Design a Pharmacy Ordering system                                       | Healthcare        | Medium     |
| 73  | Design a Prescription Management system                                 | Healthcare        | Medium     |
| 74  | Design an E-learning Video platform                                     | Education         | Medium     |
| 75  | Design an API Gateway                                                   | Infra             | Hard       |
| 76  | Design a Load Balancer                                                  | Infra             | Hard       |
| 77  | Design a DNS Resolver (simplified)                                      | Infra             | Hard       |
| 78  | Design a Search Autocomplete system                                     | Infra             | Medium     |
| 79  | Design a Spell Checker                                                  | Infra             | Medium     |
| 80  | Design a Recommendation Engine (basic rules)                            | Infra             | Hard       |
| 81  | Design a Keyword Indexer                                                | Infra             | Medium     |
| 82  | Design a Billing/Subscription system (SaaS)                             | SaaS              | Hard       |
| 83  | Design an Authentication & Authorization system                         | Security          | Hard       |
| 84  | Design an OAuth2 login system (Google/Facebook login)                   | Security          | Hard       |
| 85  | Design a Captcha Verification system                                    | Security          | Medium     |
| 86  | Design a Password Manager (1Password simplified)                        | Security          | Hard       |
| 87  | Design a Cloud Storage system (Dropbox basic)                           | Storage           | Hard       |
| 88  | Design a Backup & Restore Service (like Uber problem)                   | Storage           | Hard       |
| 89  | Design a File Compression/Decompression tool                            | Storage           | Medium     |
| 90  | Design a Photo Album app                                                | Media             | Easy       |
| 91  | Design an Image Editing app (basic filters)                             | Media             | Medium     |
| 92  | Design a Video Editor Timeline                                          | Media             | Hard       |
| 93  | Design a Payment Gateway                                                | Finance           | Hard       |
| 94  | Design a Loyalty Points system                                          | E-commerce        | Medium     |
| 95  | Design a Refund & Return system                                         | E-commerce        | Medium     |
| 96  | Design an Order Tracking system                                         | E-commerce        | Medium     |
| 97  | Design an Address Book / Contacts app                                   | Productivity      | Easy       |
| 98  | Design a Task Management app (like Trello)                              | Productivity      | Medium     |
| 99  | Design a Kanban Board system                                            | Productivity      | Medium     |
| 100 | Design a CI/CD Pipeline Orchestrator                                    | DevTools          | Hard       |

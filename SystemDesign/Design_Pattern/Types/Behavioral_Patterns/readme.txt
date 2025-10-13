🎯 Behavioral Patterns (11) → Easy-to-Remember Order
👉 First letters = CC – II – MM – OSS – TV

1. Handling Requests
 - Chain of Responsibility → pass a request along handlers.
 - Command → encapsulate a request.

2. Working with Data/Flow
 - Interpreter → interpret expressions.
 - Iterator → traverse collections.

3. Communication & State
 - Mediator → central hub for interactions.
 - Memento → save/restore state.
 - Observer → notify dependents.
 - State → change behavior by state.
 - Strategy → pick algorithm at runtime.

4. Structure & Extension
 - Template Method → define algorithm skeleton.
 - Visitor → add new operations.

👉 Mnemonic: “Cool Coders Implement Ideas, Make Magic Of Smart Software Tricks & Vision”
👉 Meaning: start with requests (Chain, Command) 
→ sometimes need to interpret & traverse (Interpreter, Iterator) 
→ then manage communication (Mediator) 
→ preserve history (Memento) 
→ broadcast events (Observer) 
→ manage lifecycle (State) 
→ choose algorithms (Strategy) 
→ enforce flow (Template) 
→ extend with new operations (Visitor).


| #     | Pattern                       | Common LLD Question / Topic                                                | Real-world Example / Trigger                                                                 |
| ----- | ----------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **1** | **Strategy**                  | 🔹 *Design a Tax / Discount / Sorting / Payment Algorithm System*          | Swap algorithms dynamically (remove `if-else`)                                               |
| **2** | **Observer (Pub/Sub)**        | 🔹 *Design a Notification / Event Bus / Chat Room / News Feed System*      | Multiple subscribers get updates when state changes                                          |
| **3** | **Command**                   | 🔹 *Design Undo/Redo System / Task Queue / Macro Recorder*                 | Encapsulate request as an object to store or replay                                          |
| **4** | **State**                     | 🔹 *Design a Traffic Light / Order Lifecycle / Ticket Workflow*            | Object changes behavior when its internal state changes                                      |
| **5** | **Template Method** *(bonus)* | 🔹 *Design a Game AI / Report Generator / Algorithm Skeleton*              | Define skeleton of algorithm and let subclasses fill steps                                   |
| **6** | **Iterator**                  | 🔹 *Design Custom Collection Traversal / File Reader / Playlist Navigator* | Provide a standard way to sequentially access elements without exposing underlying structure |

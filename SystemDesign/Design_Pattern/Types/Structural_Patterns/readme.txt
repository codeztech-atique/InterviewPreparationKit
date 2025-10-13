🔹 Structural (ABCDFFP) → How to organize structure
👉 Mnemonic: “Architects Build Cool Designs For Fast Projects”

 - Adapter → Make two incompatible systems work together.
 - Bridge → Separate abstraction from implementation.
 - Composite → Compose objects into tree structures.
 - Decorator → Add responsibilities without changing class.
 - Facade → Provide a simple interface to a complex system.
 - Flyweight → Share objects to save memory.
 - Proxy → Control access (auth, caching, lazy load).

👉 First letters = ABCDFFP
👉 Meaning: first connect things (Adapter, Bridge) 
 → then organize (Composite) 
 → then add/extend (Decorator)
 → then simplify (Facade) 
 → then optimize (Flyweight) 
 → finally protect/control (Proxy).

 | #     | Pattern                          | Common LLD Question / Topic                                                          | Real-world Example / Trigger                                    |
| ----- | -------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **1** | **Adapter**  (Important)         | 🔹 *Integrate 3rd-party Payment API / Convert Legacy Interface to New System*        | “Make two incompatible systems work together”                   |
| **2** | **Decorator**                    | 🔹 *Design a Coffee Machine / Pizza Customizer / Middleware Stack (Express.js)*      | Add new behavior dynamically without touching existing class    |
| **3** | **Proxy**                        | 🔹 *Design a Cache Proxy / Virtual Proxy / API Rate Limiter / Security Proxy*        | Control access or add caching/lazy-loading around a real object |
| **4** | **Facade** *(optional but easy)* | 🔹 *Design a Subsystem Wrapper (Order Service → Payment + Inventory + Notification)* | Simplify complex subsystem under one interface                  |
| **5** | **Composite** (Important )*      | 🔹 *Design a File System (Folder/File hierarchy)*                                    | Treat individual and group objects uniformly                    |

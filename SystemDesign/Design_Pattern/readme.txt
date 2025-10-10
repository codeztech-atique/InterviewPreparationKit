// Tighly couple and loosly couple 

/* TypeScript example that demonstrates all the concepts 

1. Classes & Objects
2. Interfaces
3. Inheritance
4. Polymorphism
5. Abstraction

Here you go — one-line definitions for each:

Classes & Objects → A class is a blueprint, and an object is an instance created from that blueprint.

Interfaces → An interface defines a contract of methods and properties that a class must implement.

Inheritance → Inheritance allows a class to reuse and extend another class’s functionality.

Polymorphism → Polymorphism means the same method behaves differently depending on the object.

Abstraction → Abstraction hides implementation details and exposes only the essential features.


🧠 🎯 Top 10 Most Commonly Asked Design Patterns (for LLD Interviews)
#	Pattern	Type	Why It’s Important / Common Use Case
1️⃣ Singleton	Creational	Very common in LLD. Used for one shared instance — DB connection, logger, cache, config manager.	
2️⃣ Factory Method / Simple Factory	Creational	Interviewers love this — create objects based on input (e.g., PaymentFactory, ShapeFactory).	
3️⃣ Builder	Creational	Used to build complex objects step-by-step (e.g., PizzaBuilder, BookBuilder). Great for immutability and optional fields.	
4️⃣ Strategy	Behavioral	Most frequent behavioral question! Replace multiple if-else with interchangeable algorithms (e.g., payment, tax, discount).	
5️⃣ Observer (Publisher–Subscriber)	Behavioral	Used in event systems, notification systems, chat apps, or UI listeners.	
6️⃣ Decorator	Structural	Add new features dynamically (e.g., add milk/sugar to coffee, add compression/encryption to streams).	
7️⃣ Adapter	Structural	Connect incompatible systems (e.g., integrate 3rd-party API into your own interface).	
8️⃣ Proxy	Structural	Control access or lazy-load (e.g., database proxy, cache proxy, API rate limiter).	
9️⃣ Command	Behavioral	Encapsulate a request as an object (e.g., undo/redo, queue of actions).	
🔟 State	Behavioral	Used in workflow/state machines (e.g., order states, traffic lights, ticket lifecycle).	


🔑 Breakdown:

Interface (Vehicle) defines a contract for all vehicles.
Abstract class (Engine) hides implementation details and forces subclasses to implement start().
Inheritance: ElectricCar extends Car.
Polymorphism: drive() behaves differently in Car and ElectricCar.
Classes & Objects: Car and ElectricCar are instantiated into objects (car1, tesla).




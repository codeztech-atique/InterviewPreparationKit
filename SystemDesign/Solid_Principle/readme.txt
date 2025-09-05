SOLID Principles

S — Single Responsibility Principle (SRP)
A class should have only one reason to change.
➝ One class = One responsibility.

O — Open/Closed Principle (OCP)
A class should be open for extension but closed for modification.
➝ You can extend behavior without changing existing code.

L — Liskov Substitution Principle (LSP)
Subtypes must be substitutable for their base types.
➝ A derived class should work wherever the base class is expected.

I — Interface Segregation Principle (ISP)
No client should be forced to depend on methods it does not use.
➝ Prefer smaller, specific contracts over large, general ones.

D — Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions.
➝ Depend on interfaces/abstractions, not concrete implementations.

✅ Summary with only Book–Library:

SRP → Library manages books, LibraryPrinter prints them.
OCP → Book can be extended into ReferenceBook without changing base.
LSP → LibraryBook can replace Book safely.
ISP → Separate Borrowable and Readable instead of forcing one big class.
DIP → Library depends on a Logger abstraction, not directly on console.log.
export {};

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
}

interface Button { paint(): void; }

// Concrete Products
class WinButton implements Button { paint() { console.log("Win Button"); } }
class MacButton implements Button { paint() { console.log("Mac Button"); } }

// Concrete Factories
class WinFactory implements GUIFactory { createButton() { return new WinButton(); } }
class MacFactory implements GUIFactory { createButton() { return new MacButton(); } }

// Client
const factory: GUIFactory = new MacFactory();
factory.createButton().paint();  // Mac Button

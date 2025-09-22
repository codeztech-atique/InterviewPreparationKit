exports = {};

// Implementation layer
interface Device {
  turnOn(): void;
  turnOff(): void;
}

class TV implements Device {
  turnOn() { console.log("TV is ON"); }
  turnOff() { console.log("TV is OFF"); }
}

class Radio implements Device {
  turnOn() { console.log("Radio is ON"); }
  turnOff() { console.log("Radio is OFF"); }
}

// Abstraction layer
class Remote {
  constructor(protected device: Device) {}
  on() { this.device.turnOn(); }
  off() { this.device.turnOff(); }
}

// Usage
const tvRemote = new Remote(new TV());
tvRemote.on();   // TV is ON
tvRemote.off();  // TV is OFF

const radioRemote = new Remote(new Radio());
radioRemote.on();   // Radio is ON

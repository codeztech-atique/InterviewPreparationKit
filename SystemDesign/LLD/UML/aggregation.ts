class Engine {
  start() { console.log("Engine started"); }
}

class Cars {
  constructor(public engine: Engine) {} // Aggregation
}

const engine = new Engine();
const car = new Cars(engine);  // Engine can exist without Car
car.engine.start();

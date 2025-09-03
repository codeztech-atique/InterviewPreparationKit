"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () { console.log("Engine Starts !!!"); };
    return Engine;
}());
var Cars = /** @class */ (function () {
    function Cars(engine) {
        this.engine = engine;
    }
    return Cars;
}());
var engine = new Engine();
var cars = new Cars(engine);
cars.engine.start();

import * as $ from 'jquery';
import Car from './car';

class Greeter {
    greeting: string;
    car: Car;

    constructor(message: string, car: Car) {
        this.greeting = message;
        this.car = car;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world", new Car());

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
export class Car {
    create() : Car { return new Car()};
}

export class Fiat extends Car {
    create() : Car { return new Car()}; // Violates the LSP principle
}

// index.ts
// import { Fiat } from "./violation/violation2";

// testViolation2();

// function testViolation2() {    
//     new Fiat().create(); // Violates the LSP principle
// }
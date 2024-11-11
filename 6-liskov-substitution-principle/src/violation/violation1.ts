export class Employee {
    getSalary() { return 1000;}
}

export class Manager extends Employee{
    getSalary() { return super.getSalary() * 2;}
}


// // index.ts
// import { Employee, Manager } from "./violation/violation1";

// testViolation1();

// function testViolation1() {    
//     getSalary(new Employee()); // Violates the LSP principle
// }

// function getSalary(manager: Manager) {
//     console.log(`Salary: ${manager.getSalary()}`);
// }
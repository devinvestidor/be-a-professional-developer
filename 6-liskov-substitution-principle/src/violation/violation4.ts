// Superclasse
export class Payment {
    process(amount: number): void {
        if (amount <= 0) { throw new Error("Invalid payment amount."); }
        console.log(`Processing payment of $${amount}`);
        // ...
    }
}

// Subclasse
export class CreditCardPayment extends Payment {
    process(amount: number): void {
        if (amount <= 10) { throw new Error("Minimum payment amount is $10 for credit card payments."); } // Violates LSP Principle: Strongest precondition
        super.process(amount); 
        // ...
    }
}

// index.ts
// import { CreditCardPayment, Payment } from "./violation/violation4";


// try {
//     const payment = new CreditCardPayment();
//     payment.process(8); 
// } catch (error) {
//     console.error("Error:", error);
// }
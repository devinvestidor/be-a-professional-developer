// Superclasse
export class Payment {
    process(amount: any): string {
        // ...

        if (typeof amount != 'number'|| amount <= 0) { throw new Error("Invalid payment amount."); }
        return "Payment successful"; // Strong postcondition: guarantees a success message.
    }
}

// Subclass
export class CreditCardPayment extends Payment {
    process(amount: any): string {
        // ...

        if (typeof amount != 'number') { throw new Error("Invalid payment amount."); } // Violates LSP Principle: Weaker postcondition
        return "Payment successful"; 
    }
}

// index.ts
// import { CreditCardPayment } from "./violation/violation5";


// try {
//     const payment = new CreditCardPayment();
//     console.log(`Response: ${payment.process(0)}`); 
// } catch (error) {
//     console.error("Error:", error);
// }
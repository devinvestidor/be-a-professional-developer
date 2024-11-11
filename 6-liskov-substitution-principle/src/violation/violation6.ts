// Superclass
export class DatabaseConnection {
    SERVER_LOCAL = "localhost:8080"

    connect(): void {
        console.log(`Connecting to: ${this.SERVER_LOCAL}` );
    }
}

// Subclass
export class SecureDatabaseConnection extends DatabaseConnection {
    connect(): void {
        // Add security...
        this.SERVER_LOCAL = "192.168.1.2"; // Violates LSP by Invariants must be preserved
        console.log(`Connecting to: ${this.SERVER_LOCAL}` );
    }
}

//index.ts
// import { SecureDatabaseConnection } from "./violation/violation6";

// new SecureDatabaseConnection().connect();
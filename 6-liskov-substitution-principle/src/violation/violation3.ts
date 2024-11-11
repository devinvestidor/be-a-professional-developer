// Superclass
export class DatabaseConnection {
    connect(): void {
        console.log("Connecting to the DatabaseConnection...");
        throw new Error("General connection error!"); // Superclass throws a general error
    }
}

// Subclass
export class SecureDatabaseConnection extends DatabaseConnection {
    connect(): void {
        console.log("Connecting to the SecureDatabaseConnection...");
        throw new AuthenticationError("Authentication failed!"); // Violates LSP by throwing an unrelated exception
    }
}

// Custom error class specific to authentication
export class AuthenticationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AuthenticationError";
    }
}


//index.html
// import { SecureDatabaseConnection, DatabaseConnection, AuthenticationError } from "./violation/violation3";

// // Testing with the subclass
// initializeDatabase(new SecureDatabaseConnection());
// initializeDatabase(new DatabaseConnection());


// // Function that expects a DatabaseConnection type
// function initializeDatabase(connection: DatabaseConnection) {
//     try {
//         connection.connect();
//     } catch (error) {
//         if (error instanceof AuthenticationError) {
//             console.error("Caught an authorization error:", error); // Handles AuthorizationError
//         } else {
//             console.error("Caught a general error:", error); // Expected to handle only general Error
//         }    
//     }
// }
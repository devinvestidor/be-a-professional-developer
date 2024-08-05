import { DatabaseCode } from "./database-code";

export class PostgresqlV8_0 implements DatabaseCode {
    getCurrentTime(): string { return "SELECT NOW()" }
}
import { DatabaseCode } from "./database-code";

export class PostgresqlV9_1 implements DatabaseCode {
    getCurrentTime(): string { return "SELECT clock_timestamp()" }
}
import { DatabaseCode } from "./database-code";

export class SqlServerV7_0 implements DatabaseCode {
    getCurrentTime(): string { return "SELECT GETDATE()" }
}
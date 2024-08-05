import { DatabaseCode } from "./database-code";

export class MySqlV5_6 implements DatabaseCode {
    getCurrentTime(): string { return "SELECT SYSDATE()" }
}
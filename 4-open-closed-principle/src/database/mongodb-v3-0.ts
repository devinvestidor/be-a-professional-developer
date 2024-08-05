import { DatabaseCode } from "./database-code";

export class MongoDbV3_0 implements DatabaseCode {
    getCurrentTime(): string { return "new Date()" }
}
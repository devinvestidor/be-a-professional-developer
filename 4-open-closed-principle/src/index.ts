import { DatabaseCode } from "./database/database-code";
import { MongoDbV3_0 } from "./database/mongodb-v3-0";
import { MySqlV5_6 } from "./database/mysql-v5-6";
import { PostgresqlV8_0 } from "./database/postgresql-v8-0";
import { PostgresqlV9_1 } from "./database/postgresql-v9-1";
import { SqlServerV7_0 } from "./database/sqlserver-v7-0";

printCurrentTimeQuery(new MySqlV5_6);
printCurrentTimeQuery(new PostgresqlV8_0);
printCurrentTimeQuery(new SqlServerV7_0);
printCurrentTimeQuery(new MongoDbV3_0);
printCurrentTimeQuery(new PostgresqlV9_1);



function printCurrentTimeQuery(dbCode: DatabaseCode) {
    console.log(`Class: ${dbCode.constructor.name}: ${dbCode.getCurrentTime()}`);    
}
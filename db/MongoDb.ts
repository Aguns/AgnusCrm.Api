import { MongoClient } from "https://deno.land/x/mongo@v0.11.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";



class DB {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  get getDatabase() {
    return this.client.database(this.dbName);
  }
}

const env = config();
const dbName = env.MongoDB_NAME || "deno_demo";
const dbHostUrl = env.MongoDB_HOST_URL || "mongodb://localhost:27017";
const db = new DB(dbName, dbHostUrl);
db.connect();

export default db;
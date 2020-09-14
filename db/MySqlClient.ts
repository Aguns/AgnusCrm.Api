import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

const client = await new Client().connect({
  hostname: env.MySql_HostName,
  username: env.MySql_UserName,
  db: env.MySql_Database,
  password: env.MySql_Password
});

export default client
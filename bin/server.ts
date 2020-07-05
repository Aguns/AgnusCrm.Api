import app from "../app.ts";
import "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const {args} = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

// const env = Deno.env.toObject()
// const PORT = Number(env.PORT || 3000)
// const HOST = env.API_ENDPOINT || '127.0.0.1'


app.start({ port: port });

console.log(`app running -> localhost:${port}`);
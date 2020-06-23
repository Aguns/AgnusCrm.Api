import app from "../app.ts";
import "https://deno.land/x/dotenv/mod.ts";

const env = Deno.env.toObject()
const PORT = Number(env.PORT || 4000)
const HOST = env.API_ENDPOINT || '127.0.0.1'

app.start({ hostname: HOST, port: PORT });

console.log(`app running -> ${HOST}:${PORT}`);
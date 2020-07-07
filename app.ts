
import app from "./routes/routes.ts"
import { cors,CORSConfig } from "./deps.ts";

const config: CORSConfig = {
    allowOrigins: ["*"],
    allowMethods: [
        "Delete",
        "Get",
        "Head",
        "Patch",
        "Post",
        "Put"
    ],
    allowHeaders:["*"]
  };
  
app.use(cors(config));

export default app;
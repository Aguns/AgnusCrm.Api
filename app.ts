
import app from "./routes/routes.ts"
import { cors } from "./deps.ts";

app.use(cors());

export default app;
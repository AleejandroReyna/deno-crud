import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Router } from "./config/router.ts"

// Get config enviroment variables
const { PORT } = config();

// Define App for server
const app : Application = new Application();

// Get and Parse Port number for server
const port:number = Number(PORT);

// Set router and allowed Methods
app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port });
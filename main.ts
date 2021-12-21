import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Get config enviroment variables
const { PORT } = config();

// Define App for server
const app : Application = new Application();

// Get and Parse Port number for server
const port:number = Number(PORT);

// Set Default Route
app.use(({ response }) => {
    response.body = `First project with Deno (: \nRunning in port: ${port}`;
});

await app.listen({ port });
import { Application, dotenv } from "./depts.ts";
import { Router } from "./config/router.ts"

// Get config enviroment variables
const { PORT } = dotenv.config();

// Define App for server
const app : Application = new Application();

// Get and Parse Port number for server
const port:number = Number(PORT);

// Set router and allowed Methods
app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port });
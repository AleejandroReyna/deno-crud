import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const app = new Application();
const { PORT } = config();
const port:number = Number(PORT);

app.use(({ response }) => {
    response.body = `First project with Deno (: \nRunning in port: ${port}`;
});

await app.listen({ port });
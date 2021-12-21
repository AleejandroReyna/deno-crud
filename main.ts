import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 5000;

app.use(({ response }) => {
    response.body = "First project with Deno (:";
});

await app.listen({ port });
import { Response } from "https://deno.land/x/oak/mod.ts";

// home route
export const home = (({ response } : {response : Response}) => {
    response.body = `API REST for movies with Deno (:`;
});
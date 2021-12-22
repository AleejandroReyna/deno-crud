import { Response } from "../depts.ts";

// home route
export const home = (({ response } : {response : Response}) => {
    response.body = `API REST for movies with Deno (:`;
});
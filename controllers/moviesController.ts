import { Response } from "https://deno.land/x/oak/mod.ts";
import { Client } from "../db/client.ts"
import { Movie } from "../db/interfaces.ts"

// Route for Get Movies 
const getMovies = async ({ response }: { response : Response }) => {
    let data : Movie[] = await Client.query("select * from movies")
    response.body = {
        status: true,
        data
    };
};

export { getMovies }
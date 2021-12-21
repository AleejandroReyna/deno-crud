import { Response } from "https://deno.land/x/oak/mod.ts";
import { Client } from "../db/client.ts"
import { Movie } from "../db/interfaces.ts"

// Route for Get Movies 
const getMovies = async ({ response }: { response : Response }) => {
    const data : Movie[] = await Client.query("select * from movies;")
    response.body = {
        status: true,
        data
    };
};

// Route for Get Movie
const getMovie = async ({params, response} : {params : {id: string}, response : Response }) => {
    const { id } = params
    const data : Movie[] = await Client.query(
        "select ??,name from ?? where id = ?",
        ["*", "movies", id],
        );
    if(data.length) {    
        response.body = {
            status: true,
            data: data[0]
        }
    } else {
        response.status = 404
        response.body = {
            status: false
        }
    }
}

export { getMovies, getMovie }
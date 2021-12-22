import { Response, Request } from "https://deno.land/x/oak/mod.ts";
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

// Route for Create a Movie
const createMovie = async({request, response} : {request : Request, response : Response}) => {
    const body = request.body()
    let data : Record<string, string> = {
        name: "",
        description: ""
    }
    if(!body.type) {
        return response.body = {
            status: false,
            error: "no data"
        }
    }
    if(body.type == "form-data") {
        const value = await body.value
        const read = await value.read()
        data = {...data, ...read.fields};
    } else {
        const value = await body.value
        data = {...data, ...JSON.parse(value)}
    }
    
    const result = await Client.execute(`INSERT INTO movies (name, description) VALUES(?, ?)`,
                                  [data.name, data.description])
    const returnData = await Client.query("select ??,name from ?? where id = ?",["*", "movies", result.lastInsertId]);
    response.body = {
        status: true,
        data: returnData[0]
    }
}

export { getMovies, getMovie, createMovie }
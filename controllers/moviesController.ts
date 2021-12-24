import { Request, Response } from "../depts.ts";
import { Client } from "../db/client.ts"
import { Movie } from "../db/interfaces.ts"
import { MoviesService } from '../services/moviesService.ts'

// Route for Get Movies 
const getMovies = async ({ response }: { response : Response }) => {
    let service = new MoviesService()
    const data : Movie[] = await service.getItems()
    response.body = {
        status: true,
        data
    };
};

// Route for Get Movie
const getMovie = async ({params, response} : {params : {id: string}, response : Response }) => {
    const { id } = params
    const service = new MoviesService()
    const data : Movie | null = await service.getItem(id)
    if(data) {    
        response.body = {
            status: true,
            data
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
    const service = new MoviesService()
    let params : any;
    if(!body.type) {
        return response.body = {
            status: false,
            error: "no data"
        }
    }

    if(body.type == "form-data") {
        const value = body.value
        const read = await value.read()
        params = {...read.fields};
    } else {
        const value = await body.value
        params = {...JSON.parse(value)}
    }

    let data : Movie | null = await service.createItem(params)
    if(data) {
        return response.body = {
            status: true,
            data
        }
    }
    
    response.status = 400
    response.body = {
        status: false,
        error: "Invalid params"
    }
    
}

// Route for update a Movie
const updateMovie = async({params, request, response} : 
                          {params: {id: string}, request : Request, response : Response}) => {
    const body = request.body()
    const service = new MoviesService()
    const { id } = params
    let _params : any
    if(!body.type) {
        return response.body = {
            status: false,
            error: "no data"
        }
    }
    if(body.type == "form-data") {
        const value = body.value
        const read = await value.read()
        _params = {...read.fields};
    } else {
        const value = await body.value
        _params = {...JSON.parse(value)}
    }
    let data : Movie | null = await service.updateItem(id, _params)

    if(data) {
        return response.body = {
            status: true,
            data
        }
    }
    
    response.status = 400
    response.body = {
        status: false,
        error: "Invalid params"
    }
}

// Route for delete a Movie
const deleteMovie = async ({params, response} : {params : {id: string}, response : Response}) => {
    const { id } = params
    const service = new MoviesService()
    const request = await service.deleteItem(id)
    if(request.affectedRows) {
        return response.body = {
            status: true,
            data: {
                id
            }
        }
    }
    response.status = 404
    response.body = {
        status: false,
        error: "Movie not found"
    }
}

export { getMovies, getMovie, createMovie, updateMovie, deleteMovie }
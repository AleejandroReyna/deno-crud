import { Request, Response } from "../depts.ts";
import { Client } from "../db/client.ts"
import { Movie } from "../db/interfaces.ts"
import { MoviesService } from '../services/moviesService.ts'
import { ResponseService } from "../services/responseService.ts"
import { RequestService } from "../services/requestService.ts"

// Route for Get Movies 
const getMovies = async ({ response }: { response : Response }) => {
    let moviesService = new MoviesService()
    let responseService = new ResponseService(response)
    return responseService.responsePaginatedData(await moviesService.getItems())
};

// Route for Get Movie
const getMovie = async ({params, response} : {params : {id: string}, response : Response }) => {
    const moviesService = new MoviesService()
    let responseService = new ResponseService(response)
    return responseService.responseSingleData(await moviesService.getItem(params.id))
}

// Route for Create a Movie
const createMovie = async({request, response} : {request : Request, response : Response}) => {
    const moviesService = new MoviesService()
    const requestService = new RequestService(request)
    const responseService = new ResponseService(response)
    return responseService.responseSingleData(
        await moviesService.createItem(await requestService.getRequestData())
    )
}

// Route for update a Movie
const updateMovie = async({params, request, response} : 
                          {params: {id: string}, request : Request, response : Response}) => {
    const moviesService = new MoviesService()
    const requestService = new RequestService(request)
    const responseService = new ResponseService(response)
    return responseService.responseSingleData(
        await moviesService.updateItem(params.id, await requestService.getRequestData())
    )
}

// Route for delete a Movie
const deleteMovie = async ({params, response} : {params : {id: string}, response : Response}) => {
    const moviesService = new MoviesService()
    const responseService = new ResponseService(response)
    return responseService.responseDeletedData(
        await moviesService.deleteItem(params.id), "Movie not found"
    )
}

export { getMovies, getMovie, createMovie, updateMovie, deleteMovie }
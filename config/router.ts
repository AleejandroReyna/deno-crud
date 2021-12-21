import { Router as oakRouter } from "https://deno.land/x/oak/mod.ts";
import {
    home
} from '../controllers/pagesController.ts'
import {
    getMovies,
    getMovie
} from '../controllers/moviesController.ts'

const Router = new oakRouter()

Router
    .get("/", home)
    .get("/api/movies", getMovies)
    .get("/api/movies/:id", getMovie)

export { Router }

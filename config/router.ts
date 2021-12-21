import { Router as oakRouter } from "https://deno.land/x/oak/mod.ts";
import {
    home
} from '../controllers/pagesController.ts'
import {
    getMovies
} from '../controllers/moviesController.ts'

const Router = new oakRouter()

Router
    .get("/", home)
    .get("/api/movies", getMovies)

export { Router }

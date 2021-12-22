import { Router as oakRouter } from "https://deno.land/x/oak/mod.ts";
import {
    home
} from '../controllers/pagesController.ts'
import {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
} from '../controllers/moviesController.ts'

const Router = new oakRouter()

Router
    .get("/", home)
    .get("/api/movies", getMovies)
    .get("/api/movies/:id", getMovie)
    .post("/api/movies", createMovie)
    .put("/api/movies/:id", updateMovie)
    .delete("/api/movies/:id", deleteMovie)

export { Router }

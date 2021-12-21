import { Router as oakRouter } from "https://deno.land/x/oak/mod.ts";
import {
    home
} from '../controllers/pagesController.ts'

const Router = new oakRouter()

Router
    .get("/", home)

export { Router }

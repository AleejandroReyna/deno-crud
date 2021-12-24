import {
    ModelService
} from './classes.ts'
import {
    Movie
} from '../db/interfaces.ts'

class MoviesService extends ModelService {
    table : string = "movies"
    defaultItem : Movie = {
        name: "",
        description: ""
    }
}

export { MoviesService }
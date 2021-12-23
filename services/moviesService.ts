import {
    ModelService
} from './classes.ts'

class MoviesService extends ModelService {
    table : string = "movies"
}

export { MoviesService }
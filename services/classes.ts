import { 
    ModelInterface,
    GetterModelInterface
} from './interfaces.ts'
import { 
    Client 
} from "../db/client.ts"

export abstract class ModelService implements ModelInterface, GetterModelInterface {
    abstract table : string
    
    async getItems() : Promise<any[]> {
        const data : any[] = await Client.query(`select * from ${this.table};`)
        return data
    }

    async getItem() : Promise<any>{
        return {}
    }
}
import { 
    ModelInterface,
    GetterModelInterface
} from './interfaces.ts'
import { 
    Client 
} from "../db/client.ts"

export abstract class ModelService implements GetterModelInterface {
    abstract table : string
    
    async getItems() : Promise<any[]> {
        const data : any[] = await Client.query(`select * from ${this.table};`)
        return data
    }

    async getItem(id : string | number ) : Promise<any> {
        const data : any = await Client.query(`select * from ${this.table} where id = ?`, [id])
        return data.length ? data[0] : null
    }
}
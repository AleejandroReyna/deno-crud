import { 
    ModelInterface,
    GetterModelInterface,
    UpdaterModelInterface
} from './interfaces.ts'
import { 
    Client 
} from "../db/client.ts"

export abstract class ModelService implements GetterModelInterface, UpdaterModelInterface {
    abstract table : string
    abstract defaultItem : any
    
    async getItems() : Promise<any[]> {
        const data : any[] = await Client.query(`select * from ${this.table};`)
        return data
    }

    async getItem(id : string | number ) : Promise<any> {
        const data : any[] = await Client.query(`select * from ${this.table} where id = ?`, [id])
        return data.length ? data[0] : null
    }

    async createItem(item : any) : Promise<any> {
        const requestObject = {...this.defaultItem, ...item}
        const columns = Object.keys(requestObject)
        const values = Object.values(requestObject)
        const request = `INSERT INTO ${this.table} (${columns.join(', ')}) VALUES (${columns.map(_c => "?").join(", ")})`
        const result = await Client.execute(request, values)
        if(result) {
            if(result.affectedRows && result.lastInsertId) {
                return await this.getItem(result.lastInsertId)
            }
        }
        return null
    }

    async updateItem(id : string | number, item : any ) : Promise<any> {
        const requestObject = {...this.defaultItem, ...item}
        const columns = Object.keys(requestObject)
        const values = [...Object.values(requestObject), id]
        const request = `UPDATE ${this.table} SET ${columns.map(_c => `${_c} = ?`).join(', ')} WHERE id = ?`
        const result = await Client.execute(request, values)
        if(result) {
            if(result.affectedRows) {
                return await this.getItem(id)
            }
        }
        return null
    }
}
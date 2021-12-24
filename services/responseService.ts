import { Response } from "../depts.ts";

export class ResponseService {
    response : Response

    constructor(response : Response) {
        this.response = response
    }

    async responsePaginatedData( data : any ) {
        return this.response.body = {
            status: true,
            data
        }
    }

    async responseSingleData(data : any) {
        if(data) {
            return this.response.body = {
                status: true,
                data
            }
        }
        this.response.status = 404
        return this.response.body = {
            status: false
        }
    }
}
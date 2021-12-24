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
}
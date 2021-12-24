import { Request } from "../depts.ts";

export class RequestService {
    request : Request

    constructor(request : Request) {
        this.request = request
    }

    async getRequestData() {
        const body = await this.request.body()
        if(body.type == "form-data") {
            const value = body.value
            const read = await value.read()
            return read.fields;
        } else {
            const value = await body.value
            return JSON.parse(value)
        }
    }
}
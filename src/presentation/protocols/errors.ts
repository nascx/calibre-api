import { HttpResponse } from "./http";

export class MissingParamError implements HttpResponse {
    statusCode: number;
    body: {};

    constructor(param: string) {
        this.statusCode = 400;
        this.body = { error: new Error(`Missing param: ${param}`) }
    }
}
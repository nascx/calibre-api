import { MissingParamError } from "../protocols/errors";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";

export class CreateCalibratorController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {

        const requiredFields = ["code", "status"]

        for (const field of requiredFields) {
            if (!req.body[field]) {
                return new MissingParamError(field)
            }
        }
        return { statusCode: 200, body: {} }
    }
}
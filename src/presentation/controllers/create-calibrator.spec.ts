import { CreateCalibratorController } from "./create-calibrator"
import { ReqWithoutCode, ReqWithoutStatus, ReqWithoutModel, ReqWithoutCertificate } from './mocks/create-calibrator/'
const createCalibratorController = new CreateCalibratorController()

describe("CreateCalibratorController", () => {
    test("Should return 400 if code is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutCode)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: code'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if status is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutStatus)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: status'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if model is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutModel)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: model'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if certificate is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutCertificate)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: certificate'))
    })
})

import { CreateCalibratorController } from "./create-calibrator"
import {
    ReqWithoutCode,
    ReqWithoutStatus,
    ReqWithoutModel,
    ReqWithoutCertificate,
    ReqWithoutSerialNumber,
    ReqWithoutDescription,
    ReqWithoutCalibrationDate,
    ReqWithoutCalibrationFrequency
} from './mocks/create-calibrator/'

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

describe("CreateCalibratorController", () => {
    test("Should return 400 if serial number is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutSerialNumber)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: serialNumber'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if description is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutDescription)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: description'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if calibration date is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutCalibrationDate)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: calibrationDate'))
    })
})

describe("CreateCalibratorController", () => {
    test("Should return 400 if calibration frquency is no provided", async () => {
        const response = await createCalibratorController.handle(ReqWithoutCalibrationFrequency)
        expect(response.statusCode).toBe(400)
        expect(response.body.error).toEqual(new Error('Missing param: calibrationFrequency'))
    })
})
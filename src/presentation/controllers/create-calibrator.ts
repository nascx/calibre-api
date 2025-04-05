import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateCalibratorController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        try {
            const {
                code,
                model,
                status,
                certificate,
                serialNumber,
                description,
                observation,
                calibrationData,
                locationData
            } = req.body;

            const createdCalibrationData = await prisma.calibrationData.create({
                data: {
                    calibratorCode: code,
                    date: new Date(calibrationData.date),
                    frequency: calibrationData.frequency,
                    next: new Date(calibrationData.next),
                },
            })

            const createdLocationData = await prisma.locationData.create({
                data: {
                    calibratorCode: code,
                    entryDate: new Date(locationData.entryDate),
                    leaveDate: new Date(locationData.leaveDate),
                    location: locationData.location,
                    department: locationData.department,
                    observation: locationData.observation,
                },
            })

            const calibrator = await prisma.calibrator.create({
                data: {
                    code,
                    model,
                    status,
                    certificate,
                    serialNumber,
                    description,
                    observation,
                    calibrationDataId: createdCalibrationData.id,
                    locationDataId: createdLocationData.id,
                },
                include: {
                    calibrationData: true,
                    locationData: true,
                },
            })

            return {
                statusCode: 201,
                body: calibrator
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { error: 'Erro ao criar calibrador' }
            }
        }
    }
}
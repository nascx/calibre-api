import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UpdateCalibrationController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        try {
            const {
                calibratorCode,
                calibrationDataId,
                date,
                newFrequency,
                nextCalibration,
                toleranceProcess,
            } = req.body;

            console.log(newFrequency)

            const calibrator = await prisma.calibrator.findUnique({
                where: { code: calibratorCode }
            });


            if (!calibrator) {
                return {
                    statusCode: 404,
                    body: { error: 'Calibrador não encontrado.' }
                }
            }

            await prisma.calibrationData.update({
                where: { id: calibrationDataId },
                data: {
                    date: date,
                    frequency: newFrequency,
                    next: nextCalibration,
                    toleranceProcess: toleranceProcess
                },
                include: {
                    calibrator: true
                }
            });

            const newCalibrator = await prisma.calibrator.findUnique({
                where: { code: calibratorCode },
                include: { calibrationData: true }
            });

            return {
                statusCode: 201,
                body: newCalibrator
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                body: { error: 'Erro ao atualizar a localização do calibrador' }
            }
        }
    }
}
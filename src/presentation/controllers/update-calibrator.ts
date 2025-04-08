import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UpdateCalibratorController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        try {
            const {
                code,
                newCode,
                newModel,
                newStatus,
                newCertificate,
                newSerialNumber,
                newDescription,
                newObservation
            } = req.body;

            const calibrator = await prisma.calibrator.findUnique({
                where: { code: code }
            });


            if (!calibrator) {
                return {
                    statusCode: 404,
                    body: { error: 'Calibrador não encontrado.' }
                }
            }

            await prisma.calibrator.update({
                where: { code: code },
                data: {
                    code: newCode,
                    model: newModel,
                    status: newStatus,
                    certificate: newCertificate,
                    serialNumber: newSerialNumber,
                    description: newDescription,
                    observation: newObservation
                }
            });

            const newCalibrator = await prisma.calibrator.findUnique({
                where: { code: newCode },
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
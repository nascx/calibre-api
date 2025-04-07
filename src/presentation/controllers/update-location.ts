import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";
import { PrismaClient } from "@prisma/client";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const prisma = new PrismaClient();

export class UpdateLocationController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        try {
            const {
                calibratorId,
                currentLocationId,
                newDepartment,
                newLocation,
                observation
            } = req.body;

            const calibrator = await prisma.calibrator.findUnique({
                where: { code: calibratorId }
            });


            if (!calibrator) {
                return {
                    statusCode: 404,
                    body: { error: 'Calibrador não encontrado.' }
                }
            }

            const entryDate = new Date();
            const formattedDate = format(entryDate, 'dd/MM/yyyy', { locale: ptBR });

            await prisma.locationData.update({
                where: { id: currentLocationId },
                data: {
                    leaveDate: formattedDate
                }
            });

            const newLocationData = await prisma.locationData.create({
                data: {
                    calibratorCode: calibratorId,
                    location: newLocation,
                    department: newDepartment,
                    entryDate: formattedDate,
                    leaveDate: 'hoje',
                    observation: observation
                }
            });

            await prisma.calibrator.update({
                where: { code: calibratorId },
                data: {
                    locationDataId: newLocationData.id
                }
            });


            return {
                statusCode: 201,
                body: ''
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
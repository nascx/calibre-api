import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "./protocols/controller";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetHistoricLocation implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        try {

            const locations = await prisma.locationData.findMany({
                where: {
                    calibratorCode: req.query.code
                },
                orderBy: {
                    id: 'asc' // opcional: ordena da mais recente para a mais antiga
                }
            });

            if (locations.length === 0) {
                return {
                    statusCode: 404,
                    body: { error: 'Nenhuma localização encontrada para esse código.' }
                }
            }

            return {
                statusCode: 200,
                body: { locations }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                body: { error: 'Erro ao criar calibrador' }
            }
        }
    }
}
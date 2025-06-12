import { PrismaClient } from '@prisma/client'
import { Controller } from './protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

const prisma = new PrismaClient()

export class GetAllCalibratorsController implements Controller {

    handle = async (req: HttpRequest): Promise<HttpResponse> => {
        console.log("Função de pegar todos os calibradores foi chamada")
        try {
            const calibrators = await prisma.calibrator.findMany({
                include: {
                    calibrationData: true,
                    locationData: true,
                },
            })
            return {
                statusCode: 200,
                body: calibrators
            }
        } catch (error) {
            console.error(error)
            return {
                statusCode: 500,
                body: { error: 'Erro ao buscar calibradores' }
            }
        }
    }
}
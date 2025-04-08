import { Router } from 'express'
import { UpdateLocationController } from '../controllers/update-location'
import { GetHistoricLocation } from '../controllers/get-historic-location'


const router = Router()

const updateLocationController = new UpdateLocationController()
const getHistoricLocation = new GetHistoricLocation()

router.put('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await updateLocationController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})

router.get('/', async (req, res) => {
    const httpRequest = { params: req.params, query: req.query }
    const httpResponse = await getHistoricLocation.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { router as locationRouter }
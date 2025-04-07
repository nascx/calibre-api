import { Router } from 'express'
import { UpdateLocationController } from '../controllers/update-location'


const router = Router()

const updateLocationController = new UpdateLocationController()


router.put('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await updateLocationController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { router as locationRouter }
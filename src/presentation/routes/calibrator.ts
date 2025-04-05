import { Router } from 'express'
import { CreateCalibratorController } from '../controllers/create-calibrator'

const router = Router()

const createCalibratorController = new CreateCalibratorController()

router.post('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await createCalibratorController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { router as calibratorRouter }
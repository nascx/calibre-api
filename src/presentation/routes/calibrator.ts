import { Router } from 'express'
import { CreateCalibratorController } from '../controllers/create-calibrator'
import { GetAllCalibratorsController } from '../controllers/get-all-calibrators'

const router = Router()

const createCalibratorController = new CreateCalibratorController()
const getAllCalibratorsController = new GetAllCalibratorsController()

router.post('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await createCalibratorController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})

router.get('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await getAllCalibratorsController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})


export { router as calibratorRouter }
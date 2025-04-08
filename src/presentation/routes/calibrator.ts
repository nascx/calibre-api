import { Router } from 'express'
import { CreateCalibratorController } from '../controllers/create-calibrator'
import { GetAllCalibratorsController } from '../controllers/get-all-calibrators'
import { UpdateCalibratorController } from '../controllers/update-calibrator'

const router = Router()

const createCalibratorController = new CreateCalibratorController()
const getAllCalibratorsController = new GetAllCalibratorsController()
const updateCalibratorController = new UpdateCalibratorController()

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

router.put('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await updateCalibratorController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})


export { router as calibratorRouter }
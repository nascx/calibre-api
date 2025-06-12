import { Router } from 'express'
import { CreateCalibratorController } from '../controllers/create-calibrator'
import { GetAllCalibratorsController } from '../controllers/get-all-calibrators'
import { UpdateCalibratorController } from '../controllers/update-calibrator'
import { UpdateCalibrationController } from '../controllers/update-calibration'

const router = Router()

const updateCalibrationController = new UpdateCalibrationController()
router.put('/', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await updateCalibrationController.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
})


export { router as calibrationRouter }
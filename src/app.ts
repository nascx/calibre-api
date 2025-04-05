import e from "express";
import cors from 'cors'
import { calibratorRouter } from "./presentation/routes/calibrator";
const app = e()

app.use(e.json())
app.use(cors())
app.use('/calibrator', calibratorRouter)

app.listen(5002, () => {
    console.log('Calibre running...')
})
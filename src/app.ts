import e from "express";
import cors from 'cors'
import { calibratorRouter } from "./presentation/routes/calibrator";
import { locationRouter } from "./presentation/routes/location";
const app = e()

app.use(e.json())
app.use(cors())
app.use('/calibrator', calibratorRouter)
app.use('/location', locationRouter)

app.listen(5002, () => {
    console.log('Calibre running...')
})
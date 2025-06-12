import { Calibrator } from '../entities/calibrator'

export interface ICalibatrorRepo {
    findById(code: number, returns: {}): Promise<{} | null>;
    create(calibrator: Calibrator): Promise<Calibrator>
}
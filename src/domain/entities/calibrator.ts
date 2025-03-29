export class Calibrator {
    code: string;
    status: string;
    model: string;
    certificate: string;
    serieNumber: number;
    calibrationCate: string;
    calibrationFrequency: string;
    nextCalibraton: string
    toleranceProcess: string
    observation: string;

    constructor(
        code: string,
        status: string,
        model: string,
        certificate: string,
        serialNumber: number,
        calibrationCate: string,
        calibrationFrequency: string,
        nextCalibraton: string,
        toleranceProcess: string,
        observation: string,
    ) {
        this.code = code;
        this.status = status;
        this.model = model;
        this.certificate = certificate;
        this.serieNumber = serialNumber;
        this.calibrationCate = calibrationCate;
        this.calibrationCate = calibrationFrequency
        this.nextCalibraton = nextCalibraton;
        this.toleranceProcess = toleranceProcess;
        this.toleranceProcess = observation;
    }
}

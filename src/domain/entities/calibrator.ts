export class Calibrator {
    code: string;
    status: string;
    model: string;
    certificate: string;
    serialNumber: number;
    calibrationCate: string;
    calibrationFrequency: string;
    nextCalibraton: string
    toleranceProcess: string
    observation: string;
    entryDate: string;
    area: string;
    local: string;

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
        entryDate: string,
        area: string,
        local: string,
    ) {
        this.code = code;
        this.status = status;
        this.model = model;
        this.certificate = certificate;
        this.serialNumber = serialNumber;
        this.calibrationCate = calibrationCate;
        this.calibrationCate = calibrationFrequency
        this.nextCalibraton = nextCalibraton;
        this.toleranceProcess = toleranceProcess;
        this.toleranceProcess = observation;
        this.entryDate = entryDate;
        this.area = area;
        this.local = local;
    }
}

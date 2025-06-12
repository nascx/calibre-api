export class Calibrator {
    constructor(
        public code: string,
        public model: string,
        public status: string,
        public certificate: string,
        public serialNumber: string,
        public description: string,
        public observation: string,
        public calibrationDataId: number,
        public calibrationLocationDataId: number,
    ) { }
}
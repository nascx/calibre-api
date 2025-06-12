export class LocationData {
    constructor(
        public id: number,
        public entryDate: Date,
        public leaveDate: Date,
        public location: string,
        public department: string,
        public observation: string,
    ) { }
}
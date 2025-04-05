-- CreateTable
CREATE TABLE "Calibrator" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "certificate" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "calibrationInfosId" INTEGER NOT NULL,
    "calibrationLocationInfos" INTEGER NOT NULL,

    CONSTRAINT "Calibrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalibrationData" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "frequency" TEXT NOT NULL,
    "next" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalibrationData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationData" (
    "id" SERIAL NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "leaveDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "LocationData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationInfosId_fkey" FOREIGN KEY ("calibrationInfosId") REFERENCES "CalibrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationLocationInfos_fkey" FOREIGN KEY ("calibrationLocationInfos") REFERENCES "LocationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

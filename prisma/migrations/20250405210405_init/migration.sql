/*
  Warnings:

  - You are about to drop the column `calibrationInfosId` on the `Calibrator` table. All the data in the column will be lost.
  - You are about to drop the column `calibrationLocationInfos` on the `Calibrator` table. All the data in the column will be lost.
  - Added the required column `calibrationDataId` to the `Calibrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calibrationLocationDataId` to the `Calibrator` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationInfosId_fkey";

-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationLocationInfos_fkey";

-- AlterTable
ALTER TABLE "Calibrator" DROP COLUMN "calibrationInfosId",
DROP COLUMN "calibrationLocationInfos",
ADD COLUMN     "calibrationDataId" INTEGER NOT NULL,
ADD COLUMN     "calibrationLocationDataId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationDataId_fkey" FOREIGN KEY ("calibrationDataId") REFERENCES "CalibrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationLocationDataId_fkey" FOREIGN KEY ("calibrationLocationDataId") REFERENCES "LocationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

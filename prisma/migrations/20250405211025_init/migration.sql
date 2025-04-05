/*
  Warnings:

  - You are about to drop the column `calibrationInfosId` on the `Calibrator` table. All the data in the column will be lost.
  - You are about to drop the column `calibrationLocationInfos` on the `Calibrator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[calibrationDataId]` on the table `Calibrator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationDataId]` on the table `Calibrator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calibrationDataId` to the `Calibrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationDataId` to the `Calibrator` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationInfosId_fkey";

-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationLocationInfos_fkey";

-- DropIndex
DROP INDEX "Calibrator_calibrationInfosId_key";

-- DropIndex
DROP INDEX "Calibrator_calibrationLocationInfos_key";

-- AlterTable
ALTER TABLE "Calibrator" DROP COLUMN "calibrationInfosId",
DROP COLUMN "calibrationLocationInfos",
ADD COLUMN     "calibrationDataId" INTEGER NOT NULL,
ADD COLUMN     "locationDataId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Calibrator_calibrationDataId_key" ON "Calibrator"("calibrationDataId");

-- CreateIndex
CREATE UNIQUE INDEX "Calibrator_locationDataId_key" ON "Calibrator"("locationDataId");

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationDataId_fkey" FOREIGN KEY ("calibrationDataId") REFERENCES "CalibrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_locationDataId_fkey" FOREIGN KEY ("locationDataId") REFERENCES "LocationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

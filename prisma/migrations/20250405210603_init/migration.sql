/*
  Warnings:

  - You are about to drop the column `calibrationDataId` on the `Calibrator` table. All the data in the column will be lost.
  - You are about to drop the column `calibrationLocationDataId` on the `Calibrator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[calibrationInfosId]` on the table `Calibrator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[calibrationLocationInfos]` on the table `Calibrator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calibrationInfosId` to the `Calibrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calibrationLocationInfos` to the `Calibrator` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationDataId_fkey";

-- DropForeignKey
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_calibrationLocationDataId_fkey";

-- AlterTable
ALTER TABLE "Calibrator" DROP COLUMN "calibrationDataId",
DROP COLUMN "calibrationLocationDataId",
ADD COLUMN     "calibrationInfosId" INTEGER NOT NULL,
ADD COLUMN     "calibrationLocationInfos" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Calibrator_calibrationInfosId_key" ON "Calibrator"("calibrationInfosId");

-- CreateIndex
CREATE UNIQUE INDEX "Calibrator_calibrationLocationInfos_key" ON "Calibrator"("calibrationLocationInfos");

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationInfosId_fkey" FOREIGN KEY ("calibrationInfosId") REFERENCES "CalibrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calibrator" ADD CONSTRAINT "Calibrator_calibrationLocationInfos_fkey" FOREIGN KEY ("calibrationLocationInfos") REFERENCES "LocationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

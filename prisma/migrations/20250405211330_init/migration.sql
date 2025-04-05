/*
  Warnings:

  - Added the required column `calibratorCode` to the `CalibrationData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calibratorCode` to the `LocationData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalibrationData" ADD COLUMN     "calibratorCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LocationData" ADD COLUMN     "calibratorCode" TEXT NOT NULL;

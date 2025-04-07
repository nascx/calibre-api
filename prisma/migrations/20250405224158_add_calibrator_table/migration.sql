/*
  Warnings:

  - Added the required column `toleranceProcess` to the `CalibrationData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalibrationData" ADD COLUMN     "toleranceProcess" TEXT NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT,
ALTER COLUMN "next" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LocationData" ALTER COLUMN "entryDate" SET DATA TYPE TEXT,
ALTER COLUMN "leaveDate" SET DATA TYPE TEXT;

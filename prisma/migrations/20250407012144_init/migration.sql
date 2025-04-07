/*
  Warnings:

  - The primary key for the `Calibrator` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Calibrator" DROP CONSTRAINT "Calibrator_pkey",
ADD CONSTRAINT "Calibrator_pkey" PRIMARY KEY ("code");

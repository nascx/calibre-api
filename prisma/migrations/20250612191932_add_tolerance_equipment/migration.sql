/*
  Warnings:

  - Added the required column `toleranceEquipment` to the `CalibrationData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CalibrationData` ADD COLUMN `toleranceEquipment` VARCHAR(191) NOT NULL;

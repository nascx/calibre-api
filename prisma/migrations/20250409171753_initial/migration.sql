-- CreateTable
CREATE TABLE `Calibrator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `certificate` VARCHAR(191) NOT NULL,
    `serialNumber` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `calibrationDataId` INTEGER NOT NULL,
    `locationDataId` INTEGER NOT NULL,

    UNIQUE INDEX `Calibrator_code_key`(`code`),
    UNIQUE INDEX `Calibrator_calibrationDataId_key`(`calibrationDataId`),
    UNIQUE INDEX `Calibrator_locationDataId_key`(`locationDataId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CalibrationData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calibratorCode` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `frequency` VARCHAR(191) NOT NULL,
    `next` VARCHAR(191) NOT NULL,
    `toleranceProcess` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LocationData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calibratorCode` VARCHAR(191) NOT NULL,
    `entryDate` VARCHAR(191) NOT NULL,
    `leaveDate` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Calibrator` ADD CONSTRAINT `Calibrator_calibrationDataId_fkey` FOREIGN KEY (`calibrationDataId`) REFERENCES `CalibrationData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Calibrator` ADD CONSTRAINT `Calibrator_locationDataId_fkey` FOREIGN KEY (`locationDataId`) REFERENCES `LocationData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

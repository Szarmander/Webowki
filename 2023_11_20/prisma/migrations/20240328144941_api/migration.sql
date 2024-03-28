-- CreateTable
CREATE TABLE `Addresses` (
    `AddressID` INTEGER NOT NULL,
    `UserID` INTEGER NULL,
    `Street` VARCHAR(255) NOT NULL,
    `City` VARCHAR(50) NOT NULL,
    `ZipCode` VARCHAR(10) NULL,

    UNIQUE INDEX `UserID`(`UserID`),
    PRIMARY KEY (`AddressID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetails` (
    `OrderDetailID` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderID` INTEGER NULL,
    `ProductID` INTEGER NULL,
    `Quantity` INTEGER NULL,

    INDEX `OrderID`(`OrderID`),
    INDEX `ProductID`(`ProductID`),
    PRIMARY KEY (`OrderDetailID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `OrderID` INTEGER NOT NULL,
    `UserID` INTEGER NULL,
    `OrderDate` DATE NULL,

    INDEX `UserID`(`UserID`),
    PRIMARY KEY (`OrderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `ProductID` INTEGER NOT NULL,
    `ProductName` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `UserID` INTEGER NOT NULL,
    `UserName` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `PhoneNumber` VARCHAR(15) NULL,

    UNIQUE INDEX `Email`(`Email`),
    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Addresses` ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `OrderDetails` ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Orders`(`OrderID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `OrderDetails` ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `Products`(`ProductID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

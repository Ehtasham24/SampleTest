/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Products` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

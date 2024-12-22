/*
  Warnings:

  - You are about to drop the column `address` on the `wallet` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "wallet_address_key";

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "address";

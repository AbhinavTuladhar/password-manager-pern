/*
  Warnings:

  - You are about to drop the column `websiteId` on the `Accounts` table. All the data in the column will be lost.
  - You are about to drop the `Websites` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteName` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteUrl` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Accounts" DROP CONSTRAINT "Accounts_websiteId_fkey";

-- DropForeignKey
ALTER TABLE "Websites" DROP CONSTRAINT "Websites_userId_fkey";

-- AlterTable
ALTER TABLE "Accounts" DROP COLUMN "websiteId",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "websiteName" TEXT NOT NULL,
ADD COLUMN     "websiteUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Websites";

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MasterUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

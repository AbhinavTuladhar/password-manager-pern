/*
  Warnings:

  - Added the required column `email` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accounts" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "userName" DROP NOT NULL;

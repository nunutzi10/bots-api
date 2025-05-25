/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GoogleAuthToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `GoogleAuthToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GoogleAuthToken" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthToken_userId_key" ON "GoogleAuthToken"("userId");

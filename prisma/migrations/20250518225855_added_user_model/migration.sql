/*
  Warnings:

  - A unique constraint covering the columns `[tenantId,userId]` on the table `GoogleAuthToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "GoogleAuthToken_userId_key";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "googleUserId" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tenantId_googleUserId_key" ON "User"("tenantId", "googleUserId");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthToken_tenantId_userId_key" ON "GoogleAuthToken"("tenantId", "userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_googleUserId_fkey" FOREIGN KEY ("tenantId", "googleUserId") REFERENCES "GoogleAuthToken"("tenantId", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;

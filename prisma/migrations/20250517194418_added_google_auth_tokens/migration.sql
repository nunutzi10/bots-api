-- CreateTable
CREATE TABLE "GoogleAuthToken" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "expiryDate" BIGINT,
    "scope" TEXT,
    "tokenType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoogleAuthToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GoogleAuthToken" ADD CONSTRAINT "GoogleAuthToken_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

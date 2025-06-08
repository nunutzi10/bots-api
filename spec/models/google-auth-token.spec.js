import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("GoogleAuthToken Model Tests", () => {
  let tenant;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for GAuthToken ${uniqueSuffixBase}` },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create a GoogleAuthToken correctly with valid tenant", async () => {
    const uniqueSuffix = Date.now();
    const googleAuthTokenData = {
      tenantId: tenant.id,
      userId: `google-user-id-${uniqueSuffix}`,
      accessToken: `test-access-token-${uniqueSuffix}`,
      refreshToken: `test-refresh-token-${uniqueSuffix}`,
      expiryDate: BigInt(Date.now() + 3600000),
      scope: "email profile",
      tokenType: "Bearer",
    };

    const createdToken = await prisma.googleAuthToken.create({
      data: googleAuthTokenData,
      include: {
        tenant: true,
      },
    });

    // expects
    expect(createdToken).to.be.an("object");
    expect(createdToken).to.have.property("id").that.is.a("number");
    expect(createdToken.tenantId).to.equal(tenant.id);
    expect(createdToken.userId).to.equal(googleAuthTokenData.userId);
    expect(createdToken.accessToken).to.equal(googleAuthTokenData.accessToken);
    expect(createdToken.refreshToken).to.equal(
      googleAuthTokenData.refreshToken
    );
    expect(createdToken.expiryDate).to.equal(googleAuthTokenData.expiryDate);
    expect(createdToken.scope).to.equal(googleAuthTokenData.scope);
    expect(createdToken.tokenType).to.equal(googleAuthTokenData.tokenType);
    expect(createdToken.createdAt).to.be.a("date");
    expect(createdToken.updatedAt).to.be.a("date");
    // tenant
    expect(createdToken.tenant).to.be.an("object");
    expect(createdToken.tenant.id).to.equal(tenant.id);

    // verify it was actually created
    const foundToken = await prisma.googleAuthToken.findUnique({
      where: { id: createdToken.id },
    });
    expect(foundToken).to.not.be.null;
    expect(foundToken.userId).to.equal(googleAuthTokenData.userId);
  });

  it("should create a GoogleAuthToken with optional fields being null", async () => {
    const uniqueSuffix = Date.now();
    const googleAuthTokenData = {
      tenantId: tenant.id,
      userId: `google-user-minimal-${uniqueSuffix}`,
      accessToken: `minimal-access-token-${uniqueSuffix}`,
    };
    const createdToken = await prisma.googleAuthToken.create({
      data: googleAuthTokenData,
    });
    expect(createdToken.refreshToken).to.be.null;
    expect(createdToken.expiryDate).to.be.null;
    expect(createdToken.scope).to.be.null;
    expect(createdToken.tokenType).to.be.null;
  });

  it("should fail to create a GoogleAuthToken if tenantId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentTenantId = 999999;
    const googleAuthTokenData = {
      tenantId: nonExistentTenantId,
      userId: `google-user-fail-${uniqueSuffix}`,
      accessToken: `fail-access-token-${uniqueSuffix}`,
    };

    try {
      await prisma.googleAuthToken.create({ data: googleAuthTokenData });
      expect.fail(
        "Token creation should have failed due to non-existent tenantId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });

  it("should fail to create a GoogleAuthToken if [tenantId, userId] is not unique", async () => {
    const uniqueSuffix = Date.now();
    const sharedUserId = `shared-google-user-id-${uniqueSuffix}`;

    // Create initial token
    await prisma.googleAuthToken.create({
      data: {
        tenantId: tenant.id,
        userId: sharedUserId,
        accessToken: `access-token1-${uniqueSuffix}`,
      },
    });

    // Attempt to create another token with the same tenantId and userId
    const duplicateTokenData = {
      tenantId: tenant.id,
      userId: sharedUserId,
      accessToken: `access-token2-${uniqueSuffix}`,
    };

    try {
      await prisma.googleAuthToken.create({ data: duplicateTokenData });
      expect.fail(
        "Token creation should have failed due to non-unique [tenantId, userId]"
      );
    } catch (error) {
      expect(error.code).to.equal("P2002");
      expect(error.meta.target).to.deep.equal(["tenantId", "userId"]);
    }
  });
});

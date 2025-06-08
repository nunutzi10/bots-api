import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("User Model Tests", () => {
  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create a user correctly with valid tenant and googleAuthToken relationships", async () => {
    const uniqueSuffix = Date.now();

    const tenantData = {
      name: `Test Tenant ${uniqueSuffix}`,
    };
    const createdTenant = await prisma.tenant.create({
      data: tenantData,
    });

    const testGoogleUserId = `google-user-id-${uniqueSuffix}`;
    const googleAuthTokenData = {
      tenantId: createdTenant.id,
      userId: testGoogleUserId,
      accessToken: `test-access-token-${uniqueSuffix}`,
    };
    const createdGoogleAuthToken = await prisma.googleAuthToken.create({
      data: googleAuthTokenData,
    });

    const userData = {
      tenantId: createdTenant.id,
      googleUserId: testGoogleUserId,
      email: `test.user.${uniqueSuffix}@example.com`,
      name: `Test User Name ${uniqueSuffix}`,
    };

    const createdUser = await prisma.user.create({
      data: userData,
      include: {
        tenant: true,
        googleAuthToken: true,
      },
    });
    // expects
    expect(createdUser).to.be.an("object");
    expect(createdUser).to.have.property("id").that.is.a("number");
    expect(createdUser.tenantId).to.equal(createdTenant.id);
    expect(createdUser.googleUserId).to.equal(testGoogleUserId);
    expect(createdUser.email).to.equal(userData.email);
    expect(createdUser.name).to.equal(userData.name);
    expect(createdUser.createdAt).to.be.a("date");
    expect(createdUser.updatedAt).to.be.a("date");
    // tenant
    expect(createdUser.tenant).to.be.an("object");
    expect(createdUser.tenant.id).to.equal(createdTenant.id);
    expect(createdUser.tenant.name).to.equal(tenantData.name);
    // googleAuthToken
    expect(createdUser.googleAuthToken).to.be.an("object");
    expect(createdUser.googleAuthToken.tenantId).to.equal(createdTenant.id);
    expect(createdUser.googleAuthToken.userId).to.equal(testGoogleUserId);
    expect(createdUser.googleAuthToken.accessToken).to.equal(
      googleAuthTokenData.accessToken
    );
    expect(createdUser.googleAuthToken.id).to.equal(createdGoogleAuthToken.id);

    const foundUser = await prisma.user.findUnique({
      where: { id: createdUser.id },
    });
    expect(foundUser).to.not.be.null;
    expect(foundUser.email).to.equal(userData.email);
  });

  it("should fail to create a user if a related GoogleAuthToken does not exist", async () => {
    const uniqueSuffix = Date.now();
    const createdTenant = await prisma.tenant.create({
      data: { name: `Test Tenant Fail ${uniqueSuffix}` },
    });

    const nonExistentGoogleUserId = `non-existent-google-id-${uniqueSuffix}`;

    const userData = {
      tenantId: createdTenant.id,
      googleUserId: nonExistentGoogleUserId,
      email: `fail.user.${uniqueSuffix}@example.com`,
      name: "Fail User Name",
    };

    try {
      await prisma.user.create({ data: userData });
      expect.fail(
        "User creation should have failed due to missing GoogleAuthToken"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });
});

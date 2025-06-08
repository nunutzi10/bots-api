import { expect } from "chai";
import prisma from "../../prisma/setup.js";
import { randomBytes } from "crypto";


describe("ApiKey Model Tests", () => {
  let tenant;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for ApiKey ${uniqueSuffixBase}` },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  // Helper to generate a unique key for testing
  const generateUniqueKey = (prefix = "testkey_") => {
    return prefix + randomBytes(16).toString("hex") + `_${Date.now()}`;
  }

  it("should create an apiKey correctly with valid tenant", async () => {
    const apiKeyData = {
      tenantId: tenant.id,
      key: generateUniqueKey(),
    };

    const createdApiKey = await prisma.apiKey.create({
      data: apiKeyData,
      include: {
        tenant: true,
      },
    });

    // expects
    expect(createdApiKey).to.be.an("object");
    expect(createdApiKey).to.have.property("id").that.is.a("number");
    expect(createdApiKey.tenantId).to.equal(tenant.id);
    expect(createdApiKey.key).to.equal(apiKeyData.key);
    expect(createdApiKey.createdAt).to.be.a("date");
    expect(createdApiKey.updatedAt).to.be.a("date");
    // tenant
    expect(createdApiKey.tenant).to.be.an("object");
    expect(createdApiKey.tenant.id).to.equal(tenant.id);

    const foundApiKey = await prisma.apiKey.findUnique({
      where: { id: createdApiKey.id },
    });
    expect(foundApiKey).to.not.be.null;
    expect(foundApiKey.key).to.equal(apiKeyData.key);
  });

  it("should fail to create an apiKey if tenantId does not exist", async () => {
    const nonExistentTenantId = 999999;
    const apiKeyData = {
      tenantId: nonExistentTenantId,
      key: generateUniqueKey("failkey_"),
    };

    try {
      await prisma.apiKey.create({ data: apiKeyData });
      expect.fail(
        "ApiKey creation should have failed due to non-existent tenantId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });

  it("should fail to create an apiKey if key is not unique", async () => {
    const sharedKey = generateUniqueKey("duplicatekey_");

    // Create initial apiKey
    await prisma.apiKey.create({
      data: {
        tenantId: tenant.id,
        key: sharedKey,
      },
    });

    // Attempt to create another apiKey with the same key
    const duplicateApiKeyData = {
      tenantId: tenant.id,
      key: sharedKey,
    };

    try {
      await prisma.apiKey.create({ data: duplicateApiKeyData });
      expect.fail("ApiKey creation should have failed due to non-unique key");
    } catch (error) {
      expect(error.code).to.equal("P2002");
      expect(error.meta.target).to.include("key");
    }
  });
});
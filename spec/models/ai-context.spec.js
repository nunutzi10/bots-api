import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("AiContext Model Tests", () => {
  let tenant;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for AiContext ${uniqueSuffixBase}` },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create an AiContext correctly with valid tenant", async () => {
    const uniqueSuffix = Date.now();
    const aiContextData = {
      tenantId: tenant.id,
      name: `Test AI Context ${uniqueSuffix}`,
      instructions: "Be helpful and concise.",
      temperature: 0.7,
    };

    const createdAiContext = await prisma.aiContext.create({
      data: aiContextData,
      include: {
        tenant: true,
      },
    });

    // expects
    expect(createdAiContext).to.be.an("object");
    expect(createdAiContext).to.have.property("id").that.is.a("number");
    expect(createdAiContext.tenantId).to.equal(tenant.id);
    expect(createdAiContext.name).to.equal(aiContextData.name);
    expect(createdAiContext.instructions).to.equal(aiContextData.instructions);
    expect(createdAiContext.temperature).to.equal(aiContextData.temperature);
    expect(createdAiContext.createdAt).to.be.a("date");
    expect(createdAiContext.updatedAt).to.be.a("date");
    // expects tenant
    expect(createdAiContext.tenant).to.be.an("object");
    expect(createdAiContext.tenant.id).to.equal(tenant.id);
    // verify it was actually created
    const foundAiContext = await prisma.aiContext.findUnique({
      where: { id: createdAiContext.id },
    });
    expect(foundAiContext).to.not.be.null;
    expect(foundAiContext.name).to.equal(aiContextData.name);
  });

  it("should create an AiContext with optional field 'instructions' being null", async () => {
    const uniqueSuffix = Date.now();
    const aiContextData = {
      tenantId: tenant.id,
      name: `Test AI Context No Instructions ${uniqueSuffix}`,
      temperature: 0.5,
    };

    const createdAiContext = await prisma.aiContext.create({
      data: aiContextData,
    });
    expect(createdAiContext.instructions).to.be.null;
    expect(createdAiContext.name).to.equal(aiContextData.name);
  });

  it("should fail to create an AiContext if tenantId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentTenantId = 999999;
    const aiContextData = {
      tenantId: nonExistentTenantId,
      name: `Fail AI Context ${uniqueSuffix}`,
      temperature: 0.5,
    };

    try {
      await prisma.aiContext.create({ data: aiContextData });
      expect.fail(
        "AiContext creation should have failed due to non-existent tenantId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });
});

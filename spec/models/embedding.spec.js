import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("Embedding Model Tests", () => {
  let tenant;
  let aiContext;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for Embedding ${uniqueSuffixBase}` },
    });
    aiContext = await prisma.aiContext.create({
      data: {
        tenantId: tenant.id,
        name: `Test AI Context for Embedding ${uniqueSuffixBase}`,
        temperature: 0.5,
      },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create an embedding correctly with valid AiContext", async () => {
    const uniqueSuffix = Date.now();
    const embeddingData = {
      aiContextId: aiContext.id,
      content: `This is some text content to be embedded ${uniqueSuffix}.`,
    };

    const createdEmbedding = await prisma.embedding.create({
      data: embeddingData,
      include: {
        aiContext: true,
      },
    });

    // expects
    expect(createdEmbedding).to.be.an("object");
    expect(createdEmbedding).to.have.property("id").that.is.a("number");
    expect(createdEmbedding.aiContextId).to.equal(aiContext.id);
    expect(createdEmbedding.content).to.equal(embeddingData.content);
    // aiContext
    expect(createdEmbedding.aiContext).to.be.an("object");
    expect(createdEmbedding.aiContext.id).to.equal(aiContext.id);

    // Verify it was actually created
    const foundEmbedding = await prisma.embedding.findUnique({
      where: { id: createdEmbedding.id },
    });
    expect(foundEmbedding).to.not.be.null;
    expect(foundEmbedding.content).to.equal(embeddingData.content);
  });

  it("should fail to create an embedding if aiContextId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentAiContextId = 999999;
    const embeddingData = {
      aiContextId: nonExistentAiContextId,
      content: `Failed embedding content ${uniqueSuffix}.`,
    };

    try {
      await prisma.embedding.create({ data: embeddingData });
      expect.fail(
        "Embedding creation should have failed due to non-existent aiContextId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });
});

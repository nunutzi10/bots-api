import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("Conversation Model Tests", () => {
  let tenant;
  let aiContext;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for Conversation ${uniqueSuffixBase}` },
    });
    aiContext = await prisma.aiContext.create({
      data: {
        tenantId: tenant.id,
        name: `Test AI Context for Conversation ${uniqueSuffixBase}`,
        temperature: 0.5,
      },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create a conversation correctly with valid AiContext", async () => {
    const uniqueSuffix = Date.now();
    const conversationData = {
      aiContextId: aiContext.id,
      requesterMsisdn: `+1234567890${uniqueSuffix}`,
    };

    const createdConversation = await prisma.conversation.create({
      data: conversationData,
      include: {
        aiContext: true,
      },
    });

    // expects
    expect(createdConversation).to.be.an("object");
    expect(createdConversation).to.have.property("id").that.is.a("number");
    expect(createdConversation.aiContextId).to.equal(aiContext.id);
    expect(createdConversation.requesterMsisdn).to.equal(
      conversationData.requesterMsisdn
    );
    expect(createdConversation.createdAt).to.be.a("date");
    expect(createdConversation.updatedAt).to.be.a("date");
    // aiContext
    expect(createdConversation.aiContext).to.be.an("object");
    expect(createdConversation.aiContext.id).to.equal(aiContext.id);

    // Verify it was actually created
    const foundConversation = await prisma.conversation.findUnique({
      where: { id: createdConversation.id },
    });
    expect(foundConversation).to.not.be.null;
    expect(foundConversation.requesterMsisdn).to.equal(
      conversationData.requesterMsisdn
    );
  });

  it("should fail to create a conversation if aiContextId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentAiContextId = 999999;
    const conversationData = {
      aiContextId: nonExistentAiContextId,
      requesterMsisdn: `+0987654321${uniqueSuffix}`,
    };

    try {
      await prisma.conversation.create({ data: conversationData });
      expect.fail(
        "Conversation creation should have failed due to non-existent aiContextId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });
});

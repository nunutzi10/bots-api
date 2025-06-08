import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("Completion Model Tests", () => {
  let tenant;
  let aiContext;
  let conversation;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for Completion ${uniqueSuffixBase}` },
    });
    aiContext = await prisma.aiContext.create({
      data: {
        tenantId: tenant.id,
        name: `Test AI Context for Completion ${uniqueSuffixBase}`,
        temperature: 0.5,
      },
    });
    conversation = await prisma.conversation.create({
      data: {
        aiContextId: aiContext.id,
        requesterMsisdn: `+111222333${uniqueSuffixBase}`,
      },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create a completion correctly with valid AiContext and Conversation", async () => {
    const uniqueSuffix = Date.now();
    const completionData = {
      aiContextId: aiContext.id,
      conversationId: conversation.id,
      prompt: `User prompt ${uniqueSuffix}`,
      response: `AI response ${uniqueSuffix}`,
    };

    const createdCompletion = await prisma.completion.create({
      data: completionData,
      include: {
        aiContext: true,
        conversation: true,
      },
    });

    // expects
    expect(createdCompletion).to.be.an("object");
    expect(createdCompletion).to.have.property("id").that.is.a("number");
    expect(createdCompletion.aiContextId).to.equal(aiContext.id);
    expect(createdCompletion.conversationId).to.equal(conversation.id);
    expect(createdCompletion.prompt).to.equal(completionData.prompt);
    expect(createdCompletion.response).to.equal(completionData.response);
    expect(createdCompletion.createdAt).to.be.a("date");
    expect(createdCompletion.updatedAt).to.be.a("date");
    // Asserts for included AiContext and Conversation
    expect(createdCompletion.aiContext).to.be.an("object");
    expect(createdCompletion.aiContext.id).to.equal(aiContext.id);
    expect(createdCompletion.conversation).to.be.an("object");
    expect(createdCompletion.conversation.id).to.equal(conversation.id);

    const foundCompletion = await prisma.completion.findUnique({
      where: { id: createdCompletion.id },
    });
    expect(foundCompletion).to.not.be.null;
  });

  it("should create a completion correctly with valid AiContext and null Conversation", async () => {
    const uniqueSuffix = Date.now();
    const completionData = {
      aiContextId: aiContext.id,
      // conversationId is optional
      prompt: `User prompt no-convo ${uniqueSuffix}`,
      response: `AI response no-convo ${uniqueSuffix}`,
    };

    const createdCompletion = await prisma.completion.create({
      data: completionData,
      include: {
        aiContext: true,
      },
    });
    expect(createdCompletion.conversationId).to.be.null;
    expect(createdCompletion.prompt).to.equal(completionData.prompt);
    expect(createdCompletion.aiContextId).to.equal(aiContext.id);
  });


  it("should fail to create a completion if aiContextId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentAiContextId = 999999;
    const completionData = {
      aiContextId: nonExistentAiContextId,
      conversationId: conversation.id,
      prompt: `Fail prompt ${uniqueSuffix}`,
      response: `Fail response ${uniqueSuffix}`,
    };

    try {
      await prisma.completion.create({ data: completionData });
      expect.fail(
        "Completion creation should have failed due to non-existent aiContextId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });

  it("should fail to create a completion if conversationId is provided but does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentConversationId = 999999;
    const completionData = {
      aiContextId: aiContext.id,
      conversationId: nonExistentConversationId,
      prompt: `Fail prompt convo ${uniqueSuffix}`,
      response: `Fail response convo ${uniqueSuffix}`,
    };

    try {
      await prisma.completion.create({ data: completionData });
      expect.fail(
        "Completion creation should have failed due to non-existent conversationId"
      );
    } catch (error) {
      expect(error.code).to.equal("P2003");
    }
  });
});
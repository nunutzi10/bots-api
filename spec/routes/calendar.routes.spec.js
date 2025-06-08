import { expect } from "chai";
import request from "supertest";
import prisma from "../../prisma/setup.js";
import app from "../../src/index.js";
import { createPollyInstance } from "../helpers/pollySetup.js";

describe("Calendar Routes - /api/calendar", () => {
  let polly;
  let tenant;
  let googleAuthToken;
  let user;
  let apiKey;
  let validApiKey;

  const uniqueSuffixBase = Date.now();

  validApiKey = `test-api-key-calendar-${uniqueSuffixBase}`;

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");

    tenant = await prisma.tenant.create({
      data: { name: "Tenant Test" },
    });

    googleAuthToken = await prisma.googleAuthToken.create({
      data: {
        tenantId: tenant.id,
        userId: "110189435729154194106",
        accessToken:
          "ya29.a0AW4XtxgD0tH_PAGS7Fw9PaiX1LzngJzESSAvLC0r7496JcusLrAB4YBcczwc5s20-oV0uuEVhqLuiZlfRHbH1UL5MYkv4DY1TsAvxOjKVSwXwrrOH1P4Zv2rsog9iA7ygHXo8drAa68Q7eGkvBVqghdAYa2njWgJYR0o1zx2aCgYKAd8SARUSFQHGX2Mil9HpVN66MWC3UmUKZBHnpA0175",
        refreshToken:
          "1//0fY44ZeigmCQJCgYIARAAGA8SNwF-L9IrDxJ8aTIz40RyFCww4bHa9Fe8AmuqLuOUN-DEdFpcFQMZKsqez5vfIDT0xjB8Gk7kk9g",
        expiryDate: "1748844230177",
        scope:
          "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        tokenType: "Bearer",
      },
    });

    user = await prisma.user.create({
      data: {
        tenantId: tenant.id,
        googleUserId: "110189435729154194106",
        email: "nunutzi12@gmail.com",
        name: "Test Calendar User",
      },
    });

    apiKey = await prisma.apiKey.create({
      data: {
        tenantId: tenant.id,
        key: validApiKey,
      },
    });
  });

  afterEach(async () => {
    if (polly) {
      await polly.stop();
    }
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  describe("POST /create-event", () => {
    it("should create a calendar event successfully", async () => {
      const eventData = {
        summary: "Team Meeting",
        description: "Discuss project updates.",
        startTime: "2025-05-31T14:00:00-06:00",
        endTime: "2025-05-31T14:30:00-06:00",
        attendees: [{ email: "giovanni@guruteconecta.com" }],
        location: "Sala de Juntas Virtual",
      };

      polly = createPollyInstance("google-create-event", {});

      const response = await request(app)
        .post("/api/calendar/create-event")
        .query({ email: user.email })
        .set("Authorization", `Bearer ${validApiKey}`)
        .send(eventData)
        .expect(201);

      expect(response.body).to.be.an("object");
      expect(response.body.event.status).to.equal("confirmed");
      expect(response.body.event.summary).to.equal(eventData.summary);
    });
  });

  describe("GET /get-events", () => {
    it("should get events for a specific user", async function () {
      const eventData = {
        startDate: "2025-05-29T11:00:00-06:00",
        endDate: "2025-06-01T11:30:00-06:00",
      };
      
      polly = createPollyInstance("google-get-event", {});

      const response = await request(app)
        .get("/api/calendar/get-events")
        .query({ email: user.email })
        .set("Authorization", `Bearer ${validApiKey}`)
        .send(eventData)
        .expect(200);

      expect(response.body.events).to.be.an("array");
    });
  });
});

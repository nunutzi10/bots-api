import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("Tenant Model Tests", () => {
  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create a tenant correctly", async () => {
    const uniqueSuffix = Date.now();
    const tenantData = {
      name: `Test Tenant ${uniqueSuffix}`,
    };

    const createdTenant = await prisma.tenant.create({
      data: tenantData,
    });

    // expects
    expect(createdTenant).to.be.an("object");
    expect(createdTenant).to.have.property("id").that.is.a("number");
    expect(createdTenant.name).to.equal(tenantData.name);
    expect(createdTenant.createdAt).to.be.a("date");
    expect(createdTenant.updatedAt).to.be.a("date");

    // Verify it was actually created in the DB (within the transaction)
    const foundTenant = await prisma.tenant.findUnique({
      where: { id: createdTenant.id },
    });
    expect(foundTenant).to.not.be.null;
    expect(foundTenant.name).to.equal(tenantData.name);
  });
});

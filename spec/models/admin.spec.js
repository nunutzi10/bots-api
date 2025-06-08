import { expect } from "chai";
import prisma from "../../prisma/setup.js";

describe("Admin Model Tests", () => {
  let tenant;
  const uniqueSuffixBase = Date.now();

  beforeEach(async () => {
    await prisma.$executeRawUnsafe("BEGIN");
    // Create a tenant to associate with admins
    tenant = await prisma.tenant.create({
      data: { name: `Test Tenant for Admin ${uniqueSuffixBase}` },
    });
  });

  afterEach(async () => {
    await prisma.$executeRawUnsafe("ROLLBACK");
  });

  it("should create an admin correctly with valid tenant", async () => {
    const uniqueSuffix = Date.now();
    const adminData = {
      tenantId: tenant.id,
      email: `admin.test.${uniqueSuffix}@example.com`,
      password: "securepassword123",
      googleId: `google-admin-id-${uniqueSuffix}`,
      resetToken: `reset-token-${uniqueSuffix}`,
    };

    const createdAdmin = await prisma.admin.create({
      data: adminData,
      include: {
        tenant: true,
      },
    });

    // expects
    expect(createdAdmin).to.be.an("object");
    expect(createdAdmin).to.have.property("id").that.is.a("number");
    expect(createdAdmin.tenantId).to.equal(tenant.id);
    expect(createdAdmin.email).to.equal(adminData.email);
    expect(createdAdmin.password).to.equal(adminData.password);
    expect(createdAdmin.googleId).to.equal(adminData.googleId);
    expect(createdAdmin.resetToken).to.equal(adminData.resetToken);
    expect(createdAdmin.createdAt).to.be.a("date");
    expect(createdAdmin.updatedAt).to.be.a("date");
    // tenant
    expect(createdAdmin.tenant).to.be.an("object");
    expect(createdAdmin.tenant.id).to.equal(tenant.id);
    expect(createdAdmin.tenant.name).to.equal(tenant.name);
    // verify it was actually created
    const foundAdmin = await prisma.admin.findUnique({
      where: { id: createdAdmin.id },
    });
    expect(foundAdmin).to.not.be.null;
    expect(foundAdmin.email).to.equal(adminData.email);
  });

  it("should create an admin with optional fields (password, googleId, resetToken) being null", async () => {
    const uniqueSuffix = Date.now();
    const adminData = {
      tenantId: tenant.id,
      email: `admin.optional.${uniqueSuffix}@example.com`,
    };

    const createdAdmin = await prisma.admin.create({
      data: adminData,
    });

    expect(createdAdmin.email).to.equal(adminData.email);
    expect(createdAdmin.password).to.be.null;
    expect(createdAdmin.googleId).to.be.null;
    expect(createdAdmin.resetToken).to.be.null;
  });

  it("should fail to create an admin if tenantId does not exist", async () => {
    const uniqueSuffix = Date.now();
    const nonExistentTenantId = 999999;
    const adminData = {
      tenantId: nonExistentTenantId,
      email: `admin.fail.${uniqueSuffix}@example.com`,
      password: "password",
    };

    try {
      await prisma.admin.create({ data: adminData });
      expect.fail(
        "Admin creation should have failed due to non-existent tenantId"
      );
    } catch (error) {
      // P2003: Foreign key constraint failed on the field: `tenantId`
      expect(error.code).to.equal("P2003");
    }
  });

  it("should fail to create an admin if email is not unique", async () => {
    const uniqueSuffix = Date.now();
    const sharedEmail = `duplicate.admin.${uniqueSuffix}@example.com`;

    await prisma.admin.create({
      data: {
        tenantId: tenant.id,
        email: sharedEmail,
        password: "password1",
      },
    });

    const adminData = {
      tenantId: tenant.id,
      email: sharedEmail,
      password: "password2",
    };

    try {
      await prisma.admin.create({ data: adminData });
      expect.fail("Admin creation should have failed due to non-unique email");
    } catch (error) {
      // P2002: Unique constraint failed
      expect(error.code).to.equal("P2002");
      expect(error.meta.target).to.include("email");
    }
  });

  it("should fail to create an admin if googleId is not unique", async () => {
    const uniqueSuffix = Date.now();
    const sharedGoogleId = `duplicate-google-id-${uniqueSuffix}`;

    await prisma.admin.create({
      data: {
        tenantId: tenant.id,
        email: `admin1.${uniqueSuffix}@example.com`,
        googleId: sharedGoogleId,
      },
    });

    const adminData = {
      tenantId: tenant.id,
      email: `admin2.${uniqueSuffix}@example.com`,
      googleId: sharedGoogleId,
    };

    try {
      await prisma.admin.create({ data: adminData });
      expect.fail(
        "Admin creation should have failed due to non-unique googleId"
      );
    } catch (error) {
      // P2002: Unique constraint failed
      expect(error.code).to.equal("P2002");
      expect(error.meta.target).to.include("googleId");
    }
  });

  it("should fail to create an admin if resetToken is not unique", async () => {
    const uniqueSuffix = Date.now();
    const sharedResetToken = `duplicate-reset-token-${uniqueSuffix}`;

    await prisma.admin.create({
      data: {
        tenantId: tenant.id,
        email: `admin.reset1.${uniqueSuffix}@example.com`,
        resetToken: sharedResetToken,
      },
    });

    const adminData = {
      tenantId: tenant.id,
      email: `admin.reset2.${uniqueSuffix}@example.com`,
      resetToken: sharedResetToken,
    };

    try {
      await prisma.admin.create({ data: adminData });
      expect.fail(
        "Admin creation should have failed due to non-unique resetToken"
      );
    } catch (error) {
      // P2002: Unique constraint failed
      expect(error.code).to.equal("P2002");
      expect(error.meta.target).to.include("resetToken");
    }
  });
});

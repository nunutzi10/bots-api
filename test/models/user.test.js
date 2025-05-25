import { expect } from 'chai';
import prisma from '../setup.js';

describe('User model', () => {
  let createdTenant;
  let createdGoogleAuthToken;
  let createdUser;

  const testGoogleUserId = `test-google-id-${Date.now()}`;

  beforeEach(async () => {
    createdTenant = await prisma.tenant.create({
      data: { name: `Test Tenant ${Date.now()}` }
    });

    createdGoogleAuthToken = await prisma.googleAuthToken.create({
      data: {
        tenantId: createdTenant.id,
        userId: testGoogleUserId,
        accessToken: 'accessToken-xyz-test'
      }
    });

    createdUser = null;
  });

  afterEach(async () => {
    if (createdUser && createdUser.id) {
      try {
        await prisma.user.delete({ where: { id: createdUser.id } });
      } catch (error) {
        console.error(`Error cleaning up user (${createdUser.id}):`, error.message);
      }
    }

    if (createdGoogleAuthToken && createdGoogleAuthToken.id) {
      try {
        await prisma.googleAuthToken.delete({ where: { id: createdGoogleAuthToken.id } });
      } catch (error) {
        console.error(`Error cleaning up googleAuthToken (${createdGoogleAuthToken.id}):`, error.message);
      }
    } else if (createdGoogleAuthToken && createdTenant) {
      try {
        await prisma.googleAuthToken.delete({
          where: {
            userId_tenantId: {
              userId: testGoogleUserId,
              tenantId: createdTenant.id
            }
          }
        });
      } catch (error)
       {
        console.error(`Error cleaning up googleAuthToken by composite key (${testGoogleUserId}, ${createdTenant.id}):`, error.message);
      }
    }

    if (createdTenant && createdTenant.id) {
      try {
        await prisma.tenant.delete({ where: { id: createdTenant.id } });
      } catch (error) {
        console.error(`Error cleaning up tenant (${createdTenant.id}):`, error.message);
      }
    }

    createdTenant = null;
    createdGoogleAuthToken = null;
    createdUser = null;
  });

  it('create a user with googleUserId and valid relationships', async () => {
    createdUser = await prisma.user.create({
      data: {
        tenantId: createdTenant.id,
        googleUserId: testGoogleUserId,
        email: `test.user.${Date.now()}@example.com`,
        name: 'Test User',
      },
      include: {
        tenant: true,
        googleAuthToken: true
      }
    });

    expect(createdUser).to.have.property('id');
    expect(createdUser.email).to.match(/^test\.user\.\d+@example\.com$/);
    expect(createdUser.tenant.name).to.equal(createdTenant.name);
    expect(createdUser.googleAuthToken).to.not.be.null;

    if (createdUser.googleAuthToken) {
        expect(createdUser.googleAuthToken.accessToken).to.equal('accessToken-xyz-test');
        expect(createdUser.googleAuthToken.userId).to.equal(testGoogleUserId);
    }
  });
});
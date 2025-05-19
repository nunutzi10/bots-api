import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();

class AuthService {
  async createGoogleAuthToken({ tokens, googleId, email, name, tenantId }) {
    try {
      return await Prisma.$transaction(async (prisma) => {
        const tenant = await Prisma.tenant.findUnique({
          where: { id: tenantId }
        });
        if (!tenant) {
          throw new Error('Tenant no encontrado');
        }
        const savedToken = await Prisma.googleAuthToken.upsert({
          where: {
            tenantId_userId: {
              tenantId,
              userId: googleId
            }
          },
          update: {
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            expiryDate: tokens.expiry_date ? BigInt(tokens.expiry_date) : null,
            scope: tokens.scope,
            tokenType: tokens.token_type,
          },
          create: {
            userId: googleId,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            expiryDate: tokens.expiry_date ? BigInt(tokens.expiry_date) : null,
            scope: tokens.scope,
            tokenType: tokens.token_type,
            tenant: { connect: { id: tenantId } }
          }
        });

        const user = await Prisma.user.upsert({
          where: {
            tenantId_googleUserId: { 
              tenantId: tenantId,
              googleUserId: googleId 
            }
          },
          update: {
            email: email,
            name: name
          },
          create: {
            tenantId: tenantId,
            googleUserId: googleId,
            email: email,
            name: name,
          }
        });
        console.log('Se creo con exito el Auth!')
        return { ...savedToken, user };
      }
      );
    } catch (error) {
      console.error('Error en transacción:', error);
      throw new Error(error.message);
    }
  }
}

export default AuthService;
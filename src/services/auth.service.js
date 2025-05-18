import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();

class AuthService {
  async createGoogleAuthToken(tokens, userIdForDemo) {
    try {
      const savedGoogleAuthToken = await Prisma.googleAuthToken.upsert({
        where: { userId: userIdForDemo },
        update: {
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
          expiryDate: tokens.expiry_date ? BigInt(tokens.expiry_date) : null,
          scope: tokens.scope,
          tokenType: tokens.token_type,
        },
        create: {
          userId: userIdForDemo,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
          expiryDate: tokens.expiry_date ? BigInt(tokens.expiry_date) : null,
          scope: tokens.scope,
          tokenType: tokens.token_type,
          tenant: {
            connect: {
              id: 1
            }
          }
        }
      });

      console.log('Se creo con exito el Auth!')
      return savedGoogleAuthToken;
    } catch (error) {
      console.error('Error al obtener tokens o guardarlos:', error.message);
      if (error.response && error.response.data) {
          console.error('Detalles del error de Google:', error.response.data);
      }
      res.status(500).send('Error durante la autenticación con Google.');
    }
  }
}

export default AuthService;
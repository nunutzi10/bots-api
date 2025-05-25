import { google } from 'googleapis';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loadGoogleCredentials(req, res, next) {
  const email = req.query.email || req.headers['x-email'];

  if (!email) {
    return res.status(400).json({ message: 'Email no proporcionado.' });
  }
  req.email = email;

  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    console.log('Usuario: ', user)

    if (!user) {
      return res.status(401).json({
        message: 'Usuario no encontrado.',
        authUrl: '/api/auth/google'
      });
    }

    const userId = user.googleUserId
    const tenantId = user.tenantId

    const tokenData = await prisma.googleAuthToken.findFirst({
      where: { userId: userId },
    });

    if (!tokenData || !tokenData.accessToken) {
      return res.status(401).json({
        message: 'Usuario no autenticado con Google o tokens no encontrados.',
        authUrl: '/api/auth/google'
      });
    }

    const userOAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    userOAuth2Client.setCredentials({
      access_token: tokenData.accessToken,
      refresh_token: tokenData.refreshToken,
      expiry_date: tokenData.expiryDate ? Number(tokenData.expiryDate) : null,
      scope: tokenData.scope,
      token_type: tokenData.tokenType
    });

    userOAuth2Client.on('tokens', async (newTokens) => {
      console.log('Tokens refrescados para userId:', userId, newTokens);
      let updateData = {
        accessToken: newTokens.access_token,
        expiryDate: newTokens.expiry_date ? BigInt(newTokens.expiry_date) : null,
        scope: newTokens.scope,
        tokenType: newTokens.token_type
      };

      if (newTokens.refresh_token) {
        updateData.refreshToken = newTokens.refresh_token;
      }

      await prisma.googleAuthToken.update({
        where: {
          tenantId_userId: {
            tenantId,
            userId: userId
          }
        },
        data: updateData,
      });
      console.log('Tokens actualizados en la BD para userId:', userId);
    });

    req.googleClient = userOAuth2Client;
    next();

  } catch (error) {
    console.error('Error al cargar credenciales de Google:', error);
    res.status(500).json({ message: 'Error interno al procesar credenciales de Google.' });
  }
}
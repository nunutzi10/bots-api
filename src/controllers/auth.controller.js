import oauth2Client, { scopes } from '../config/googleClient.js';
import AuthService from "../services/auth.service.js";

const authService = new AuthService();

export const createGoogleAuthToken = async (req, res) => {
  const { code } = req.query;
  const tenantId = parseInt(req.tenantId)

  if (!code) {
    return res.status(400).send('Error: No se recibió el código de autorización.');
  }
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const { data: profile } = await oauth2Client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    });

    const authRecord = await authService.createGoogleAuthToken({
      tokens,
      googleId: profile.sub,
      email: profile.email,
      name: profile.name,
      tenantId
    });

    res.status(201).json({
      user: {
        id: authRecord.user.id,
        email: authRecord.user.email,
        name: authRecord.user.name
      },
      tokens: {
        accessToken: authRecord.accessToken,
        expiryDate: authRecord.expiryDate?.toString()
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error en autenticación con Google",
      error: err.message
    });
  }
};
import oauth2Client, { scopes } from '../config/googleClient.js';
import AuthService from "../services/auth.service.js";

const authService = new AuthService();

export const createGoogleAuthToken = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Error: No se recibió el código de autorización.');
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log('Tokens recibidos:', tokens);

    const userIdForDemo = 'user_quien_inicio_el_flujo';
    const authRecordFromService = await authService.createGoogleAuthToken(tokens, userIdForDemo);
    const responseData = {
      ...authRecordFromService,
      expiryDate: authRecordFromService.expiryDate ? authRecordFromService.expiryDate.toString() : null
    };
    
    res.status(201).json(responseData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred while creating a auth.", error: err.message });
  }
};
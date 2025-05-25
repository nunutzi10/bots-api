import { Router } from 'express';
import oauth2Client, { scopes } from '../config/googleClient.js';
import { createGoogleAuthToken } from '../controllers/auth.controller.js';

const router = Router();

router.get('/google', (req, res) => {
  const { tenantId } = req.query;
  if (!tenantId) {
    return res.status(400).send('Error: No se recibió el tenantId.');
  }
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent',
    state: tenantId,
  });
  console.log('URL de autorización:', authorizeUrl);
  res.redirect(authorizeUrl);
});

router.get('/google/callback', async (req, res) => {
  try {
    const { state: tenantId } = req.query;
    req.tenantId = tenantId;
    await createGoogleAuthToken(req, res);
  } catch (error) {
    res.redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
});

export default router;
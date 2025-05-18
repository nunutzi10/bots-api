import { Router } from 'express';
import oauth2Client, { scopes } from '../config/googleClient.js';
import { createGoogleAuthToken } from '../controllers/auth.controller.js';

const router = Router();

router.get('/google', (req, res) => {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent'
  });
  res.redirect(authorizeUrl);
});

router.get('/google/callback', async (req, res) => {
  await createGoogleAuthToken(req, res);
})

export default router;
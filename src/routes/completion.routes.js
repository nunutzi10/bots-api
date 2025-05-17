import { Router } from 'express';
import { createCompletion } from '../controllers/completion.controller.js';
import VeriFyApiKey from '../middlewares/auth.apiKey.js';

const router = Router();

router.post('/completions', [VeriFyApiKey.verifyApiKey], async (req, res) => {
  await createCompletion(req, res);
});

export default router;
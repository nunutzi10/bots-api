import { Router } from 'express';
import { createCompletion } from '../controllers/completion.controller.js';

const router = Router();

router.post('/completions', async (req, res) => {
  await createCompletion(req, res);
});

export default router;
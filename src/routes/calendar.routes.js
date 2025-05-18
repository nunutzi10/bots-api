import { Router } from 'express';
import { loadGoogleCredentials } from '../middlewares/googleAuth.middleware.js';
import { createCalendarEventController } from '../controllers/calendar.controller.js';

const router = Router();

router.post('/create-event', loadGoogleCredentials, createCalendarEventController);

export default router;
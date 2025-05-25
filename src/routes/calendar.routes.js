import { Router } from "express";
import { loadGoogleCredentials } from "../middlewares/googleAuth.middleware.js";
import { createCalendarEventController } from "../controllers/calendar.controller.js";
import VeriFyApiKey from '../middlewares/auth.apiKey.js';

const router = Router();

router.post(
  "/create-event",
  [VeriFyApiKey.verifyApiKey, loadGoogleCredentials],
  createCalendarEventController
);

export default router;
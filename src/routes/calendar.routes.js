import { Router } from "express";
import { loadGoogleCredentials } from "../middlewares/googleAuth.middleware.js";
import {
  createCalendarEventController,
  getCalendarEventsController,
} from "../controllers/calendar.controller.js";
import VeriFyApiKey from "../middlewares/auth.apiKey.js";

const router = Router();

router.post(
  "/create-event",
  [VeriFyApiKey.verifyApiKey, loadGoogleCredentials],
  createCalendarEventController
);

router.get(
  "/get-events",
  [VeriFyApiKey.verifyApiKey, loadGoogleCredentials],
  getCalendarEventsController
);

export default router;

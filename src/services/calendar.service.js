import { google } from "googleapis";

class CalendarService {
  async createEventInGoogleCalendar(authClient, eventPayload) {
    const calendar = google.calendar({ version: "v3", auth: authClient });

    try {
      const response = await calendar.events.insert({
        calendarId: "primary",
        requestBody: eventPayload,
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error en CalendarService al llamar a Google Calendar API:",
        error.message
      );
      if (error.response && error.response.data) {
        console.error(
          "Detalles del error de Google Calendar API (Service):",
          error.response.data.error
        );
      }
      throw error;
    }
  }

  async getCalendarsEventsGoogleCalendar(authClient, eventPayload) {
    const calendar = google.calendar({ version: "v3", auth: authClient });

    try {
      const { startDate, endDate, calendarId = "primary" } = eventPayload;

      if (!startDate || !endDate) {
        return res
          .status(400)
          .json({
            message: "Los parámetros 'startDate' y 'endDate' son requeridos.",
          });
      }

      const events = await calendar.events.list({
        calendarId: calendarId,
        timeMin: new Date(startDate).toISOString(),
        timeMax: new Date(endDate).toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      });

      if (!events.data.items || events.data.items.length === 0) {
        return res
          .status(200)
          .json({
            message:
              "No se encontraron eventos en el rango de fechas especificado.",
            events: [],
          });
      }
      return events.data.items;
    } catch (error) {
      console.error(
        "Error en CalendarService al llamar a Google Calendar API:",
        error.message
      );
      if (error.response && error.response.data) {
        console.error(
          "Detalles del error de Google Calendar API (Service):",
          error.response.data.error
        );
      }
      throw error;
    }
  }
}

export default CalendarService;

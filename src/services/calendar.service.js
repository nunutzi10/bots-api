import { google } from 'googleapis';

class CalendarService {
  async createEventInGoogleCalendar(authClient, eventPayload) {
    const calendar = google.calendar({ version: 'v3', auth: authClient });

    try {
      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: eventPayload,
      });
      return response.data;
    } catch (error) {
      console.error('Error en CalendarService al llamar a Google Calendar API:', error.message);
      if (error.response && error.response.data) {
          console.error('Detalles del error de Google Calendar API (Service):', error.response.data.error);
      }
      throw error;
    }
  }
}

export default CalendarService;
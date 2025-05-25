import CalendarService from '../services/calendar.service.js';

const calendarService = new CalendarService();

export const createCalendarEventController = async (req, res) => {
  if (!req.googleClient) {
    return res.status(401).json({ message: 'Cliente de Google no inicializado.' });
  }

  const { summary, description, startTime, endTime, attendees, location } = req.body;

  if (!summary || !startTime || !endTime) {
    return res.status(400).json({ message: 'Faltan summary, startTime o endTime para el evento.' });
  }

  const eventPayload = {
    summary: summary,
    location: location || '',
    description: description || '',
    start: {
      dateTime: startTime,
      timeZone: 'America/Mexico_City',
    },
    end: {
      dateTime: endTime,
      timeZone: 'America/Mexico_City',
    },
    attendees: attendees || [],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };

  try {
    const createdEventData = await calendarService.createEventInGoogleCalendar(req.googleClient, eventPayload);
    res.status(201).json({ message: 'Evento creado exitosamente!', event: createdEventData });
  } catch (error) {
    console.error('Error en Controller al crear evento en Google Calendar:', error.message);
    const errorMessage = error.response?.data?.error?.message || error.message || 'Error al crear el evento.';
    const errorStatus = error.response?.status || 500;
    res.status(errorStatus).json({ message: 'Error al crear el evento.', details: errorMessage });
  }
};
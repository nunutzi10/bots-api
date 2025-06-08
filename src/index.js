import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger.js';
dotenv.config();

// import Routes
import completionRoutes from './routes/completion.routes.js';
import authRoutes from './routes/auth.routes.js';
import calendarRoutes from './routes/calendar.routes.js';


const app = express();
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use(express.json());

app.use('/api', completionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/calendar', calendarRoutes);

export default app;
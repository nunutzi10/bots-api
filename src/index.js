import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger.js';
dotenv.config();

// import Routes
import completionRoutes from './routes/completion.routes.js';


const app = express();
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use(express.json());

app.use('/api', completionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
import app from "./index.js";
import prisma from "../prisma/setup.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await prisma.$connect();
    logger.info("Database connected successfully.");

    app.listen(PORT, () => {
      logger.info(`🚀 Server is running and ready at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start the server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();

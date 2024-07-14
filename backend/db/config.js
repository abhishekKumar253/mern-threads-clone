import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.MONGODB_URI,
  cors: process.env.CORS_ORIGIN,
  jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);

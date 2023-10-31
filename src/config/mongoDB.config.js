import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export default async function configureMongo() {
  try {
    const mongo = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
    await mongoose.connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    logger('info', `MongoDB connection successful to CoderBak database`);
  } catch (err) {
    logger('error', `Cannot connect to MongoDB CoderBack database - ${err}`);
  }
}
import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export default async function configureMongo() {
  try {
    const mongo = process.env.DB_USER;
    await mongoose.connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    logger('info', `MongoDB connection successful to CoderBak database`);
  } catch (err) {
    logger('error', `Cannot connect to MongoDB CoderBack database - ${err}`);
  }
}
import { Router } from 'express';
import { authorization } from '../utils/utils.js';
import { logger } from '../utils/logger.js';

const router = Router();

router.get('/loggerTest', authorization(['admin']), (req, res) => {
    logger('debug', 'This is a debug test log');
    logger('http', 'This is a http test log');
    logger('info', 'This is a info test log');
    logger('warning', 'This is a warning test log');
    logger('error', 'This is an error test log');
    logger('fatal', 'This is a fatal test log');
    res.send('logger test');
});

export default router;
import dotenv from 'dotenv';
dotenv.config();
import { Router } from 'express';
import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';

const router = Router();

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

export default router;





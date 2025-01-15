import path from 'path';
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../../client/dist/index.html'));
});

export default router;





        
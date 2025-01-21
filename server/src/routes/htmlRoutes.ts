import path from 'path';
import { Router, Request, Response } from 'express';
import { fileURLToPath } from 'url';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../../client/dist/index.html'));
});

export default router;
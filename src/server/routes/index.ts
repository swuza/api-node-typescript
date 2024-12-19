import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  res.send('Olá, dev!');
});

router.post('/teste', (req: Request, res: Response) => {
    //console.log(req);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };

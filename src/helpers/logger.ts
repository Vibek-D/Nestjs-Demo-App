import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request body logger: ${JSON.stringify(req.body)}`);
  next();
}

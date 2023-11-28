import { NextFunction, Request, Response } from 'express';
import { validate } from 'uuid';
import { AppError } from '../errors/App.error';

const ensureIdIsValid =
  (idParam: string) => (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params[idParam];

    if (!validate(id)) throw new AppError('Invalid or missing ID.', 400);

    next();
  };

export { ensureIdIsValid };

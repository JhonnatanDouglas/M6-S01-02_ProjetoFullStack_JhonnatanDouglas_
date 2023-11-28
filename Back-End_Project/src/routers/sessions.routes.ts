import { Request, Response, Router } from 'express';
import { sessionControllers } from '../controllers';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { loginSchema } from '../schemas/login.schemas';

const loginRouter = Router();

loginRouter.post(
  '',
  ensureDataIsValid(loginSchema),
  (req: Request, res: Response) => sessionControllers.login(req, res)
);

export { loginRouter };

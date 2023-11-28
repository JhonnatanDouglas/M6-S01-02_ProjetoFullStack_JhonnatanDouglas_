import { Request, Response, Router } from 'express';
import { usersControllers } from '../controllers';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { userSchemaRequest, userSchemaUpdate } from '../schemas/users.schemas';
import { ensureIdIsValid } from '../middlewares/ensureIdIsValid.middleware';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';

const usersRouter = Router();

usersRouter.post(
  '',
  ensureDataIsValid(userSchemaRequest),
  (req: Request, res: Response) => usersControllers.create(req, res)
);

usersRouter.get('', ensureAuthMiddleware, (req: Request, res: Response) =>
  usersControllers.list(req, res)
);

usersRouter.get(
  '/:userId',
  ensureAuthMiddleware,
  ensureIdIsValid('userId'),
  (req: Request, res: Response) => usersControllers.retrieve(req, res)
);

usersRouter.patch(
  '/:userId',
  ensureAuthMiddleware,
  ensureIdIsValid('userId'),
  ensureDataIsValid(userSchemaUpdate),
  (req: Request, res: Response) => usersControllers.update(req, res)
);

usersRouter.delete(
  '/:userId',
  ensureAuthMiddleware,
  ensureIdIsValid('userId'),
  (req: Request, res: Response) => usersControllers.remove(req, res)
);

export { usersRouter };

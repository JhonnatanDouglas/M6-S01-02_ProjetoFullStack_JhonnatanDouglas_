import { Request, Response, Router } from 'express';
import { contactController } from '../controllers';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from '../schemas/contact.schema';
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware';
import { ensureIdIsValid } from '../middlewares/ensureIdIsValid.middleware';

const contactRouter = Router();

contactRouter.use(ensureAuthMiddleware);

contactRouter.post(
  '',
  ensureDataIsValid(contactSchemaRequest),
  (req: Request, res: Response) => contactController.create(req, res)
);

contactRouter.get('', (req: Request, res: Response) =>
  contactController.list(req, res)
);

contactRouter.patch(
  '/:contactId',
  ensureIdIsValid('contactId'),
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  (req: Request, res: Response) => contactController.update(req, res)
);

contactRouter.delete(
  '/:contactId',
  ensureIdIsValid('contactId'),
  ensureIsOwnerMiddleware,
  (req: Request, res: Response) => contactController.remove(req, res)
);

export { contactRouter };

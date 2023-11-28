import { NextFunction, Request, Response } from 'express';
import { contactRepository } from '../repositories';
import { AppError } from '../errors/App.error';
import { Contact } from '../entities/contact.entitie';

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId: string = req.params.contactId;
  const userId: string = res.locals.userId;

  const contact: Contact | null = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contact) throw new AppError('Contact not found.', 404);

  if (contact.user.id != userId)
    throw new AppError("You don't have permission.", 403);

  return next();
};

export { ensureIsOwnerMiddleware };

import { Request, Response } from 'express';
import { ContactService } from '../services/contacts.services';
import {
  TContact,
  TContactUpdateRequest,
  TContactsResponse,
} from '../interfaces/contact.interfaces';

class ContactController {
  constructor(private contactServices: ContactService) {}

  async create(req: Request, res: Response) {
    const userId: string = res.locals.userId;
    const newContact: TContact = await this.contactServices.create(
      req.body,
      userId
    );

    return res.status(201).json(newContact);
  }

  async list(_: Request, res: Response) {
    const userId: string = res.locals.userId;
    const contact: TContact[] = await this.contactServices.list(userId);

    return res.status(200).json(contact);
  }

  async update(req: Request, res: Response) {
    const updatedContact: TContactUpdateRequest = req.body;
    const contactId: string = req.params.contactId;

    const updateContacts: TContact = await this.contactServices.update(
      updatedContact,
      contactId
    );

    return res.status(200).json(updateContacts);
  }

  async remove(req: Request, res: Response) {
    const contactId: string = req.params.contactId;
    await this.contactServices.remove(contactId);

    return res.status(204).json();
  }
}

export { ContactController };

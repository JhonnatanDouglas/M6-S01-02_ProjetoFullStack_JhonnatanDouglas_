import { Contact } from '../entities/contact.entitie';
import { User } from '../entities/user.entitie';
import { AppError } from '../errors/App.error';
import {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactsResponse,
} from '../interfaces/contact.interfaces';
import { TUser } from '../interfaces/users.interfaces';
import { contactRepository, userRepository } from '../repositories';
import {
  contactSchema,
  contactsSchemaResponse,
} from '../schemas/contact.schema';

class ContactService {
  async create(
    data: TContactRequest,
    contactId: string
  ): Promise<TContactResponse> {
    const user: TUser | null = await userRepository.findOne({
      where: { id: contactId },
    });

    if (!user) throw new AppError('User not found.', 404);

    const newContact: TContact = contactRepository.create({ ...data, user });

    await contactRepository.save(newContact);
    return contactSchema.parse(newContact);
  }

  async list(contactId: string): Promise<TContactsResponse> {
    const user: User | null = await userRepository.findOne({
      where: { id: contactId },
      relations: { contact: true },
    });

    if (!user) throw new AppError('User not found.', 404);

    return contactsSchemaResponse.parse(user.contact);
  }

  async update(
    data: TContactUpdateRequest,
    contactId: string
  ): Promise<TContactResponse> {
    const lastContact: TContact | null = await contactRepository.findOneBy({
      id: contactId,
    });

    if (!lastContact) throw new AppError('Contact not found.', 404);

    const newContact: TContact | null = contactRepository.create({
      ...lastContact,
      ...data,
    });

    await contactRepository.save(newContact);
    return contactSchema.parse(newContact);
  }

  async remove(contactId: string): Promise<void> {
    const contact: Contact | null = await contactRepository.findOneBy({
      id: contactId,
    });

    if (!contact) throw new AppError('Contact not found.', 404);

    await contactRepository.remove(contact);
  }
}

export { ContactService };

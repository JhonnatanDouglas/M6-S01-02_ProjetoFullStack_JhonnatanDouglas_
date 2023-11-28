import { z } from 'zod';
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactsSchemaResponse,
} from '../schemas/contact.schema';
import { DeepPartial } from 'typeorm';

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdateRequest = DeepPartial<typeof contactSchemaUpdate>;

export {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TContactUpdateRequest,
};

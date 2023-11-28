import { z } from 'zod';

const contactSchema = z.object({
  id: z.string(),
  name: z.string().max(50).min(1),
  telephone: z.string().max(50).min(1),
  register_date: z
    .date()
    .refine((date) => !isNaN(date.getTime()))
    .transform((date) => date.toISOString()),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  register_date: true,
});
const contactsSchemaResponse = z.array(contactSchema);
const contactSchemaUpdate = contactSchema
  .omit({ id: true, register_date: true })
  .partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
  contactSchemaUpdate,
};

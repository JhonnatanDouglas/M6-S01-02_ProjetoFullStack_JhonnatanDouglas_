import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  name: z.string().max(50).min(1),
  email: z.string().email().max(127).min(1),
  password: z.string().max(128).min(1),
  telephone: z.string().max(20).min(1),
  register_date: z
    .date()
    .refine((date) => !isNaN(date.getTime()))
    .transform((date) => date.toISOString()),
});

const userSchemaRequest = userSchema.omit({ id: true, register_date: true });
const userSchemaResponse = userSchema.omit({ password: true });
const usersSchemaResponse = z.array(userSchemaResponse);
const userSchemaUpdate = userSchema
  .omit({ id: true, register_date: true })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};

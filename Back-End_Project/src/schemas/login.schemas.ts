import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().max(127).min(1),
  password: z.string().max(128).min(1),
});

export { loginSchema };

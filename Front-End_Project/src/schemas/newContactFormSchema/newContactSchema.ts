import { z } from "zod";

export const newContactSchema = z.object({
  name: z.string().min(4, "No mínimo 4 letras"),
  telephone: z.string().max(11, "Informe no maximo 11 números").min(10, "Informe no minimo 10 números"),
});

export type TNewContactSchema = z.infer<typeof newContactSchema>;

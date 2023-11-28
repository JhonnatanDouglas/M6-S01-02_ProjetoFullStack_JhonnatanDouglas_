import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido").min(1, "Informe seu e-mail cadastrado"),
  password: z.string().min(4, "Informe sua senha cadastrada"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

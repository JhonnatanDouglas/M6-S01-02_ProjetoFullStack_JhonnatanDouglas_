import { z } from "zod";

export const passwordUpdateSchema = z
  .object({
    email: z.string().min(1, "E-mail obrigatório").email("Informe um e-mail válido"),
    password: z
      .string()
      .min(8, "No mínimo 8 dígitos")
      .regex(/(?=.*[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(1, "Confirme sua senha"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });

export type TPasswordUpdateSchema = z.infer<typeof passwordUpdateSchema>;

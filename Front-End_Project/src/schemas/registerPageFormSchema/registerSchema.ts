import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(4, "No mínimo 4 letras"),
    email: z.string().min(1, "E-mail obrigatório").email("Informe um e-mail válido"),
    password: z
      .string()
      .min(8, "No mínimo 8 dígitos")
      .regex(/(?=.*[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(1, "Confirme sua senha"),
    telephone: z.string().max(11, "Informe no maximo 11 números").min(10, "Informe no minimo 10 números"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;

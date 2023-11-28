import { z } from "zod";

export const userConfigsSchema = z.object({
  name: z
    .string()
    .refine(
      (value) => {
        return value === "" || value.length >= 4;
      },
      {
        message: "Pode ser em branco ou min 4 letras.",
      },
    )
    .optional(),
  telephone: z
    .string()
    .refine(
      (value) => {
        return value === "" || value.length === 10 || value.length === 11;
      },
      {
        message: "Pode ser em branco ou Informe DDD + número do telefone.",
      },
    )
    .optional(),
});

export type TUserConfigsSchema = z.infer<typeof userConfigsSchema>;

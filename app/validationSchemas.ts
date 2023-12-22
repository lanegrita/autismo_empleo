import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Ingrese un correo electrónico válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres")
});
export const VolunteerOfferFormSchema = z.object({
  text1: z.string(),
  text2: z.string(),
  text3: z.string(),

});

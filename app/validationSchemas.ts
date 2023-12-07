import { z } from "zod";

export const loginFormSchema = z.object({
  name: z.string().min(1, "Full Name.").max(255),
  email: z
    .string()
    .email()
    .optional()
    ,
  
});


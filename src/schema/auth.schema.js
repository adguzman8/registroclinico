import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "User name is requiered",
  }),
  lastname: z.string({
    required_error: "User lastname is requiered",
  }),
  email: z.string({
      required_error: "Email is requiered",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string({
      required_error: "Password requiered",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
    email: z.string({
      required_error: "Email is requiered",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string({
      required_error: "Password requiered",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

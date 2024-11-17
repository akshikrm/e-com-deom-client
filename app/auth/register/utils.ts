import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string().min(8, {
    message: "Password too short",
  }),
});

export type Errors = {
  email?: string;
  password?: string;
};

export type FormState = {
  message?: string;
  payload?: FormData;
  errors?: Errors;
  status?: number;
  data?: { data: string };
};

export const registerDefaultState: FormState = {};

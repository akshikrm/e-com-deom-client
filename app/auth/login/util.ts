import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "email is required" }).email({
    message: "invalid email",
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

export const loginDefaultState: FormState = {};

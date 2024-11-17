import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string().min(8, {
    message: "Password too short",
  }),
});

export type FormState = {
  message: string;
  errors: object;
  payload: FormData | null;
  response: any | null;
};

export const registerDefaultState: FormState = {
  message: "",
  errors: {},
  payload: null,
  response: null,
};

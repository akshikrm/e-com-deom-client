"use server";
import { Errors, FormState, registerSchema } from "./utils";

const BASE_URL = "http://localhost:5234";

export async function handleSubmit(
  previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsedData = getJsonData(formData);
  const validated = registerSchema.safeParse(parsedData);

  if (!validated.success) {
    return {
      message: "invalid data",
      errors: validated.error.flatten().fieldErrors as Errors,
      payload: formData,
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(parsedData),
    });

    const parsedResponseData = await res.json();
    if (res.status === 201) {
      return {
        message: "user registerd successfully",
        data: parsedResponseData,
        payload: formData,
      };
    }

    if (res.status === 409) {
      return {
        message: `user with email ${formData.get("email")} already exists`,
        payload: formData,
        errors: {
          email: "email already taken",
        },
      };
    }

    return previousState;
  } catch (err) {
    console.log(err);
    return {
      message: "failed to register user",
      errors: {},
      payload: formData,
    };
  }
}

const getJsonData = (formData: FormData) => {
  const obj = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return obj;
};

"use server";
import { FormState, registerSchema } from "./utils";

const BASE_URL = "http://localhost:5234";

export async function handleSubmit(
  previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsedData = getJsonData(formData);
  const validated = registerSchema.safeParse(parsedData);

  if (!validated.success) {
    return {
      ...previousState,
      errors: validated.error.flatten(),
      payload: formData,
    };
  }
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(parsedData),
    });
    const obj = {
      message: "user registerd successfully",
      errors: {},
      payload: formData,
      response: await res.json(),
    };

    if (res.status === 409) {
      obj.message = `user with email ${formData.get("email")} already exists`;
    }
    return obj;
  } catch (err) {
    console.log(err);
    return {
      message: "failed to register user",
      errors: {},
      payload: formData,
      response: null,
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

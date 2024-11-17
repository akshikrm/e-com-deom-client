"use server";
import { BASE_URL } from "@/config";
import { Errors, FormState, loginSchema } from "./util";

export async function handleSubmit(
  previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsedData = getJsonData(formData);
  const validated = loginSchema.safeParse(parsedData);

  if (!validated.success) {
    return {
      message: "invalid data",
      errors: validated.error.flatten().fieldErrors as Errors,
      payload: formData,
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(parsedData),
    });

    console.log(res);
    const parsedResponseData = await res.json();
    if (res.status === 200) {
      return {
        message: "login success",
        data: parsedResponseData,
        payload: formData,
      };
    }

    return previousState;
  } catch (err) {
    console.log(err);
    return {
      message: "failed to login",
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

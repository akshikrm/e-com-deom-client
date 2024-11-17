"use server";
import { BASE_URL } from "@/config";
import { Errors, FormState, loginSchema } from "./util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleSubmit(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsedData = getJsonData(formData);
  const validated = loginSchema.safeParse(parsedData);

  const cookieStore = await cookies();
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

    const parsedResponseData = await res.json();
    if (res.status === 200) {
      cookieStore.set("auth-token", parsedResponseData.data);
    }
  } catch (err) {
    console.log(err);
    return {
      message: "failed to login",
      payload: formData,
    };
  } finally {
    redirect("/dashboard");
  }
}

const getJsonData = (formData: FormData) => {
  const obj = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return obj;
};

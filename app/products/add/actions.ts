"use server";
import { BASE_URL } from "@/config";
import { getJWT } from "@/utils/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const productSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name is required",
    })
    .min(1, { message: "name is required" }),
  slug: z
    .string({
      required_error: "slug is required",
      invalid_type_error: "slug is required",
    })
    .min(1, { message: "slug is required" }),
  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description is required",
    })
    .min(1, { message: "description is required" }),
  price: z
    .number({
      required_error: "price is requred",
      invalid_type_error: "price should be a number",
    })
    .min(1, { message: "price should be greater than zero" }),
});

type ValidationError = {
  [x: string]: string;
};

export type FormState = {
  message?: string;
  payload?: FormData;
  errors?: ValidationError;
  status?: number;
};

export const handleSubmit = async (
  initalState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const reqData = getJsonData(formData);
  const validated = productSchema.safeParse(reqData);

  if (!validated.success) {
    const errors = validated.error.flatten().fieldErrors as ValidationError;
    return {
      message: "validation error",
      payload: formData,
      errors: errors,
    };
  }

  const jwt = await getJWT();
  let redirectURI = "";
  try {
    const { status } = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { Authorization: jwt },
      body: JSON.stringify(reqData),
    });
    if (status === 401) {
      redirectURI = "/auth/login";
    }
    if (status === 201) {
      redirectURI = "/products";
    }
  } catch (err) {
    console.log(err);
  } finally {
    if (redirectURI) {
      redirect(redirectURI);
    }
  }
  return initalState;
};

const getJsonData = (formData: FormData) => {
  return {
    name: formData.get("name")?.toString(),
    slug: formData.get("slug")?.toString(),
    description: formData.get("description")?.toString(),
    price: parseInt(formData.get("price")?.toString() || "0"),
  };
};

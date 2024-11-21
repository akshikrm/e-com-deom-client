"use server";
import { BASE_URL } from "@/config";
import { getJWT } from "@/utils/auth";

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
};

export const getProducts = async (): Promise<Product[]> => {
  const jwt = await getJWT();
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: jwt,
      },
    });
    const parsedResponse = await response.json();
    return parsedResponse.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

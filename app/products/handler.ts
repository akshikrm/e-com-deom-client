"use server";
import server from "@/utils/server";

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await server.get("/products");
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

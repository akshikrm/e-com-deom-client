"use server";
import server from "@/utils/server";

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
};

export const getProducts = async (params: object = {}): Promise<Product[]> => {
  try {
    const { data } = await server.get("/products", { params });
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

"use server";
import server from "@/utils/server";

export const getProducts = async (params: object = {}): Promise<Product[]> => {
  try {
    const { data } = await server.get("/products", { params });
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getProductCategoryName = async (
  params: object = {},
): Promise<ProductCategoryNames[]> => {
  try {
    const { data } = await server.get("/products/categories", { params });
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

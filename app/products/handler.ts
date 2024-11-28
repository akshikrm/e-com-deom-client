"use server";
import server from "@/utils/server";
import { AxiosError } from "axios";

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

export const productDelete = async (
  id: number,
  params: object = {},
): Promise<{ status: boolean; message: string }> => {
  try {
    const { data } = await server.delete(`/products/${id}`, { params });
    return {
      status: true,
      message: data.data,
    };
  } catch (err) {
    const test = err as AxiosError;
    return {
      status: true,
      message: test.response?.data as string,
    };
  }
};

"use server";

import server from "@/utils/server";

export async function getProductById(
  id: number,
): Promise<{ data?: EditProduct; status: boolean; message?: string }> {
  try {
    const { data } = await server.get(`/products/${id}`);
    return { data: data.data, status: true };
  } catch (err) {
    const { status } = err as RequestFailedError;
    switch (status) {
      case 404: {
        return { status: false, message: "product not found" };
      }
      default: {
        return { status: false, message: "something went wrong" };
      }
    }
  }
}

export async function updateProduct(
  id: number,
  payload: EditProduct,
): Promise<{ data?: EditProduct; status: boolean; message?: string }> {
  try {
    const reqData = { ...payload, price: parseInt(payload?.price || "0") };
    const { data } = await server.put(`/products/${id}`, reqData);
    return { data: data.data, status: true };
  } catch (err) {
    const { status } = err as RequestFailedError;
    switch (status) {
      case 404: {
        return { status: false, message: "product not found" };
      }
      default: {
        return { status: false, message: "something went wrong" };
      }
    }
  }
}

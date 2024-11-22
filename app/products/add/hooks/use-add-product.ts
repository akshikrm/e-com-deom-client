"use client";

import { useRouter } from "next/navigation";
import server from "@/utils/server";
import useProductForm from "../../hooks/use-product-form";

const useAddProduct = () => {
  const methods = useProductForm();

  const router = useRouter();
  const onSubmit = async (inputData: NewProduct) => {
    const reqData = { ...inputData, price: parseInt(inputData.price) };
    try {
      await server.post("/products", reqData);
      router.push("/products");
    } catch (err) {
      console.log(err);
    }
  };

  return { methods, onSubmit };
};

export default useAddProduct;

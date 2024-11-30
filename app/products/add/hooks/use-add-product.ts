"use client";
import { useRouter } from "next/navigation";
import { createProduct } from "../../handler";

const useAddProduct = () => {
  const router = useRouter();
  const onSubmit = async (inputData: NewProduct) => {
    try {
      const { status } = await createProduct(inputData);
      if (status) {
        router.push("/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { onSubmit };
};

export default useAddProduct;

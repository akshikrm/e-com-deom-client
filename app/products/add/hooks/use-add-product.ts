"use client";
import { useRouter } from "next/navigation";
import useProductForm from "../../hooks/use-product-form";
import { createProduct } from "../../handler";

const useAddProduct = () => {
  const methods = useProductForm();

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

  return { methods, onSubmit };
};

export default useAddProduct;

"use client";
import { updateProduct } from "../actions";
import useGetProductById from "./use-get-product-by-id";

const useEditProduct = (productID: number) => {
  const methods = useGetProductById(productID);

  const { reset } = methods;
  const onSubmit = async (inputData: EditProduct) => {
    try {
      const { data, status } = await updateProduct(productID, inputData);
      if (status) {
        reset({
          name: data?.name,
          description: data?.description,
          slug: data?.slug,
          price: data?.price,
          category_id: data?.category_id,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { methods, onSubmit };
};

export default useEditProduct;

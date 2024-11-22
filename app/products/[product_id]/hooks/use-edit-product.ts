"use client";
import useProductForm from "../../hooks/use-product-form";
import { useCallback, useEffect } from "react";
import { getProductById, updateProduct } from "../actions";

const useEditProduct = (productID: number) => {
  const methods = useProductForm();
  const id = productID;
  const { reset } = methods;
  const fetchProduct = useCallback(async () => {
    try {
      const { data, status } = await getProductById(id);
      if (status) {
        reset({
          name: data?.name,
          description: data?.description,
          slug: data?.slug,
          price: data?.price,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [id, reset]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const onSubmit = async (inputData: EditProduct) => {
    try {
      const { data, status } = await updateProduct(id, inputData);
      if (status) {
        reset({
          name: data?.name,
          description: data?.description,
          slug: data?.slug,
          price: data?.price,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { methods, onSubmit };
};

export default useEditProduct;

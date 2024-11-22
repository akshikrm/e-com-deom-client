import useProductForm from "../../hooks/use-product-form";
import { useCallback, useEffect } from "react";
import { getProductById } from "../actions";

const useGetProductById = (productID: number) => {
  const methods = useProductForm();
  const { reset } = methods;
  const fetchProduct = useCallback(async () => {
    try {
      const { data, status } = await getProductById(productID);
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
  }, [productID, reset]);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  return methods;
};

export default useGetProductById;

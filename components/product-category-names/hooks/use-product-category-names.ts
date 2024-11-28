import { getProductCategoryName } from "@/app/products/handler";
import { useCallback, useEffect, useState } from "react";

const useFetchProductCategoryNames = (): ProductCategoryNames[] => {
  const [productCategoryNames, setProductCategoryNames] = useState<
    ProductCategoryNames[]
  >([]);

  const fetchProductCategoryNames = useCallback(async () => {
    try {
      const data = await getProductCategoryName({ type: "name" });
      setProductCategoryNames(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProductCategoryNames();
  }, [fetchProductCategoryNames]);

  return productCategoryNames;
};

export default useFetchProductCategoryNames;

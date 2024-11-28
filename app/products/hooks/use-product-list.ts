import { getProducts } from "../handler";
import { useCallback, useEffect, useState } from "react";

const useFetchProductList = (): [
  Product[],
  (filter?: Filter) => Promise<void>,
] => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async (filter?: Filter) => {
    const data = await getProducts(filter);
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return [products, fetchProducts];
};

export default useFetchProductList;

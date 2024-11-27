"use client";
import Card from "@/components/card";
import { getProducts, Product } from "../handler";
import EditProductButton from "./edit-button";
import DeleteButton from "./delete-button";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ProductFilter from "./product-filter";

type Props = {
  isAdmin: boolean;
};

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

const ProductList: FunctionComponent<Props> = ({ isAdmin }) => {
  const [products, fetchProducts] = useFetchProductList();

  return (
    <>
      <ProductFilter
        onFilter={async (inputData: Filter) => {
          await fetchProducts(inputData);
        }}
      />
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products?.map((item) => {
          return (
            <Card key={item.id}>
              <p className="text-xl capitalize">{item.name}</p>
              <p className="text-sm text-slate-500">{item.description}</p>
              {isAdmin ? (
                <>
                  <EditProductButton productId={item.id} />
                  <DeleteButton />
                </>
              ) : null}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

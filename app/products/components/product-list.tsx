"use client";
import { getProducts } from "../handler";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ProductFilter from "./product-filter";
import { Button, Card } from "@mui/material";
import Link from "next/link";
import DeleteProduct from "./delete-product";

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
  const [openDeleteDialog, setOpenDeleteDialog] = useState<number | null>(null);

  const handleCloseDelete = async () => {
    setOpenDeleteDialog(null);
  };
  const handleOpenDelete = (id: number) => {
    setOpenDeleteDialog(id);
  };

  return (
    <>
      <ProductFilter
        onFilter={async (inputData: Filter) => {
          await fetchProducts(inputData);
        }}
      />
      <DeleteProduct
        selectedId={openDeleteDialog}
        onClose={handleCloseDelete}
      />
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products?.map((item) => {
          return (
            <Card key={item.id}>
              <p className="text-xl capitalize">{item.name}</p>
              <p className="text-sm text-slate-500">{item.description}</p>
              {isAdmin ? (
                <>
                  <Button
                    color="warning"
                    LinkComponent={Link}
                    href={`/products/${item.id}`}
                  >
                    edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleOpenDelete(item.id)}
                  >
                    delete
                  </Button>
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

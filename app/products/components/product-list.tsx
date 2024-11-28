"use client";
import { FunctionComponent, useState } from "react";
import ProductFilter from "./product-filter";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Link from "next/link";
import DeleteProduct from "./delete-product";
import RenderList from "@/components/render-list";
import Render from "@/components/render";
import useFetchProductList from "../hooks/use-product-list";

type Props = {
  isAdmin: boolean;
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
      <Stack>
        <RenderList
          list={products}
          render={(item: Product) => {
            return (
              <Card key={item.id}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                  <Render
                    when={isAdmin}
                    show={
                      <Stack spacing={2} direction="row">
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
                      </Stack>
                    }
                  />
                </Stack>
              </Card>
            );
          }}
        />
      </Stack>
    </>
  );
};

export default ProductList;

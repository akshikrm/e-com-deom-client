"use client";
import useAddProduct from "./hooks/use-add-product";
import ProductForm from "../components/product-form";
import { Card } from "@mui/material";

export default function AddProduct() {
  const { methods, onSubmit } = useAddProduct();
  return (
    <>
      <Card>
        <ProductForm
          methods={methods}
          onSubmit={onSubmit}
          buttonLabel="create"
        />
      </Card>
    </>
  );
}

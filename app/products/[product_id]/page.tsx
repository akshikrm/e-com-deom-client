"use client";
import useEditProduct from "./hooks/use-edit-product";
import ProductForm from "../components/product-form";
import { use } from "react";
import { Card } from "@mui/material";
import HeaderBreadcrumbs from "@/components/header";

type Props = {
  params: Promise<{ product_id: string }>;
};

export default function EditProduct({ params }: Props) {
  const { product_id } = use(params);
  const { methods, onSubmit } = useEditProduct(parseInt(product_id));
  return (
    <>
      <HeaderBreadcrumbs heading="Edit Product" />
      <Card>
        <ProductForm
          methods={methods}
          onSubmit={onSubmit}
          buttonLabel="update"
        />
      </Card>
    </>
  );
}

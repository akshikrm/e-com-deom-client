"use client";
import Card from "@/components/card";
import useEditProduct from "./hooks/use-edit-product";
import ProductForm from "../components/product-form";
import { use } from "react";

type Props = {
  params: Promise<{ product_id: string }>;
};

export default function EditProduct({ params }: Props) {
  const { product_id } = use(params);
  const { methods, onSubmit } = useEditProduct(parseInt(product_id));
  return (
    <Card>
      Edit Product
      <ProductForm methods={methods} onSubmit={onSubmit} buttonLabel="update" />
    </Card>
  );
}

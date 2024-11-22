"use client";
import Card from "@/components/card";
import useEditProduct from "./hooks/use-edit-product";
import ProductForm from "../components/product-form";
import { use } from "react";

export default function AddProduct({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const { product_id } = use(params);
  const { methods, onSubmit } = useEditProduct(parseInt(product_id));
  return (
    <Card>
      Edit Product
      <ProductForm methods={methods} onSubmit={onSubmit} />
    </Card>
  );
}

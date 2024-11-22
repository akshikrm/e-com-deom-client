"use client";
import Card from "@/components/card";
import useEditProduct from "./hooks/use-edit-product";
import ProductForm from "../components/product-form";

export default function AddProduct() {
  const { methods, onSubmit } = useEditProduct();
  return (
    <Card>
      Edit Product
      <ProductForm methods={methods} onSubmit={onSubmit} />
    </Card>
  );
}

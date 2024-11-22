"use client";
import Card from "@/components/card";
import useAddProduct from "./hooks/use-add-product";
import ProductForm from "../components/product-form";

export default function AddProduct() {
  const { methods, onSubmit } = useAddProduct();
  return (
    <Card>
      Add Product
      <ProductForm methods={methods} onSubmit={onSubmit} buttonLabel="create" />
    </Card>
  );
}

"use client";
import Card from "@/components/card";
import { useActionState } from "react";
import { handleSubmit } from "./actions";
import ProductForm from "../components/product-form";

export default function AddProduct() {
  const [state, addProduct] = useActionState(handleSubmit, {});

  return (
    <Card>
      Add Product
      <ProductForm addProduct={addProduct} state={state} />
    </Card>
  );
}

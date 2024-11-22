"use client";
import Card from "@/components/card";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";
import useAddProduct from "./hooks/use-add-product";

export default function AddProduct() {
  const { methods, onSubmit } = useAddProduct();
  return (
    <Card>
      Add Product
      <RHFProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="name" label="Product Name" />
        <RHFTextField name="slug" label="Product URL" />
        <RHFTextField name="description" label="Description" />
        <RHFTextField name="price" label="Price" />
        <Button type="submit">Add</Button>
      </RHFProvider>
    </Card>
  );
}

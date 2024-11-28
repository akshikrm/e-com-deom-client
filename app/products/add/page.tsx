"use client";
import useAddProduct from "./hooks/use-add-product";
import ProductForm from "../components/product-form";
import { Card } from "@mui/material";
import HeaderBreadcrumbs from "@/components/header";

export default function AddProduct() {
  const { methods, onSubmit } = useAddProduct();
  return (
    <>
      <HeaderBreadcrumbs
        heading="Add Product"
        links={[
          {
            label: "home",
            href: "/",
          },
          {
            label: "products",
            href: "/products",
          },
          {
            label: "add",
          },
        ]}
      />
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

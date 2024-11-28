"use client";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import { UseFormReturn } from "react-hook-form";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { ProductCategoryNames } from "./product-filter";

type Props = {
  methods: UseFormReturn<NewProduct, any, undefined>;
  onSubmit: (inputData: NewProduct) => Promise<void>;
  buttonLabel: string;
};

const ProductForm: FunctionComponent<Props> = ({
  methods,
  onSubmit,
  buttonLabel,
}) => {
  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField name="name" label="Product Name" />
      <RHFTextField name="slug" label="Product URL" />
      <RHFTextField name="description" label="Description" />
      <ProductCategoryNames />
      <RHFTextField name="price" label="Price" />
      <Button type="submit">{buttonLabel}</Button>
    </RHFProvider>
  );
};

export default ProductForm;

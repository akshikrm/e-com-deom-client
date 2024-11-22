"use client";

import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";
import { UseFormReturn } from "react-hook-form";
import { FunctionComponent } from "react";

type Props = {
  methods: UseFormReturn<NewProduct, any, undefined>;
  onSubmit: (inputData: NewProduct) => Promise<void>;
};

const ProductForm: FunctionComponent<Props> = ({ methods, onSubmit }) => {
  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField name="name" label="Product Name" />
      <RHFTextField name="slug" label="Product URL" />
      <RHFTextField name="description" label="Description" />
      <RHFTextField name="price" label="Price" />
      <Button type="submit">Add</Button>
    </RHFProvider>
  );
};

export default ProductForm;

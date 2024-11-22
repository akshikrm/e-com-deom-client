"use client";

import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";
import { UseFormReturn } from "react-hook-form";
import { FunctionComponent } from "react";

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
      <RHFTextField name="price" label="Price" />
      <Button type="submit">{buttonLabel}</Button>
    </RHFProvider>
  );
};

export default ProductForm;

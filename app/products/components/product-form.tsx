"use client";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import { FunctionComponent } from "react";
import { Button, Stack } from "@mui/material";
import useProductForm from "../hooks/use-product-form";

type Props = {
  defaultValues?: EditProduct;
  buttonLabel: string;
};

const ProductForm: FunctionComponent<Props> = ({
  buttonLabel,
  defaultValues,
}) => {
  const methods = useProductForm(defaultValues);

  const onSubmit = async (inputData: EditProduct) => {
    console.log(inputData);
  };

  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <Stack>
        <RHFTextField name="name" label="Product Name" />
        <RHFTextField name="slug" label="Product URL" />
        <RHFTextField name="description" label="Description" />
        {/* <ProductCategoryNames /> */}
        <RHFTextField name="price" label="Price" />
        <Button type="submit">{buttonLabel}</Button>
      </Stack>
    </RHFProvider>
  );
};

export default ProductForm;

"use client";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";

import { Button, Stack } from "@mui/material";
import useProductForm from "../hooks/use-product-form";
import ProductCategoryNames from "@/components/product-category-names";
import { useRouter } from "next/navigation";

type Props<T> = {
  defaultValues?: EditProduct;
  buttonLabel: string;
  onSubmit: (inputData: T) => Promise<{
    data?: T;
    status: boolean;
    message?: string;
  }>;
};

const ProductForm = <T,>({
  buttonLabel,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const methods = useProductForm(defaultValues);

  const router = useRouter();
  const handleSubmit = async (inputData: T) => {
    const { status } = await onSubmit(inputData);
    if (status) {
      router.replace("/products");
    }
  };

  return (
    <RHFProvider methods={methods} onSubmit={handleSubmit}>
      <Stack>
        <RHFTextField name="name" label="Product Name" />
        <RHFTextField name="slug" label="Product URL" />
        <RHFTextField name="description" label="Description" />
        <ProductCategoryNames />
        <RHFTextField name="price" label="Price" />
        <Button type="submit">{buttonLabel}</Button>
      </Stack>
    </RHFProvider>
  );
};

export default ProductForm;

import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import { UseFormReturn } from "react-hook-form";
import { FunctionComponent } from "react";
import { Button, Stack } from "@mui/material";
import ProductCategoryNames from "@/components/product-category-names";

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

import LoadingButton from "@mui/lab/LoadingButton";
import { FunctionComponent, ReactNode } from "react";
import RHFProvider from "@/components/rhf/provider";
import { useForm } from "react-hook-form";
import RHFTextField from "@/components/rhf/text-field";
import useFetchProductCategoryNames from "../hooks/use-product-category-names";
import RHFSelect from "@/components/rhf/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@mui/material";

type FilterProps = {
  onFilter: (inputData: Filter) => Promise<void>;
};

const schema = z.object({
  category_id: z.string().transform((v) => (v === "all" ? null : v)),
  start_date: z.string(),
  end_date: z.string(),
});

type Props = {
  customOption?: ReactNode | null;
};

export const ProductCategoryNames: FunctionComponent<Props> = ({
  customOption,
}) => {
  const productCategoryNames = useFetchProductCategoryNames();

  return (
    <RHFSelect label="Category" name="category_id">
      {customOption ? customOption : <option value="" />}
      {productCategoryNames.map(({ id, name }) => {
        return (
          <option value={id} key={id}>
            {name}
          </option>
        );
      })}
    </RHFSelect>
  );
};

const ProductFilter: FunctionComponent<FilterProps> = ({ onFilter }) => {
  const methods = useForm<Filter>({
    defaultValues: {
      start_date: "",
      end_date: "",
      category_id: "all",
    },
    resolver: zodResolver(schema),
  });

  return (
    <Card sx={{ mb: 5 }}>
      <RHFProvider methods={methods} onSubmit={onFilter}>
        <RHFTextField label="start date" name="start_date" type="date" />
        <RHFTextField label="end date" name="end_date" type="date" />
        <ProductCategoryNames customOption={<option value="all">All</option>} />
        <LoadingButton
          loading={methods.formState.isSubmitting}
          type="submit"
          variant="contained"
        >
          filter
        </LoadingButton>
      </RHFProvider>
    </Card>
  );
};
export default ProductFilter;

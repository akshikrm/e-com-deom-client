import Card from "@/components/card";
import { FunctionComponent } from "react";
import RHFProvider from "@/components/rhf/provider";
import { useForm } from "react-hook-form";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";
import useFetchProductCategoryNames from "../hooks/use-product-category-names";
import RHFSelect from "@/components/rhf/select";

type FilterProps = {
  onFilter: (inputData: Filter) => Promise<void>;
};

const ProductFilter: FunctionComponent<FilterProps> = ({ onFilter }) => {
  const methods = useForm<Filter>({
    defaultValues: {
      start_date: "",
      end_date: "",
      category_id: "",
    },
  });

  const productCategoryNames = useFetchProductCategoryNames();

  return (
    <Card>
      <RHFProvider methods={methods} onSubmit={onFilter}>
        <RHFTextField label="start date" name="start_date" type="date" />
        <RHFTextField label="end date" name="end_date" type="date" />
        <RHFSelect label="Category" name="category_id">
          <option value="">All</option>
          {productCategoryNames.map(({ id, name }) => {
            return (
              <option value={id} key={id}>
                {name}
              </option>
            );
          })}
        </RHFSelect>
        <Button type="submit" loading={methods.formState.isSubmitting}>
          filter
        </Button>
      </RHFProvider>
    </Card>
  );
};
export default ProductFilter;

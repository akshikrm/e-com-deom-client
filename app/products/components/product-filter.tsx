import Card from "@/components/card";
import { FunctionComponent } from "react";
import RHFProvider from "@/components/rhf/provider";
import { useForm } from "react-hook-form";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";

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

  return (
    <Card>
      <RHFProvider methods={methods} onSubmit={onFilter}>
        <RHFTextField label="start date" name="start_date" type="date" />
        <RHFTextField label="end date" name="end_date" type="date" />
        <Button type="submit" loading={methods.formState.isSubmitting}>
          filter
        </Button>
      </RHFProvider>
    </Card>
  );
};

export default ProductFilter;

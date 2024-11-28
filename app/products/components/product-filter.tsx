import LoadingButton from "@mui/lab/LoadingButton";
import { FunctionComponent } from "react";
import RHFProvider from "@/components/rhf/provider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Card, Stack } from "@mui/material";
import dayjs from "dayjs";
import RHFDatePicker from "@/components/rhf/date-picker";
import ProductCategoryNames from "@/components/product-category-names";

type FilterProps = {
  onFilter: (inputData: Filter) => Promise<void>;
};

const schema = z.object({
  category_id: z.string().transform((v) => (v === "all" ? null : v)),
  start_date: z.string(),
  end_date: z.string(),
});

const ProductFilter: FunctionComponent<FilterProps> = ({ onFilter }) => {
  const methods = useForm<Filter>({
    defaultValues: {
      start_date: dayjs().startOf("M").toISOString(),
      end_date: dayjs().endOf("month").toISOString(),
      category_id: "all",
    },
    resolver: zodResolver(schema),
  });

  return (
    <Card sx={{ mb: 5 }}>
      <RHFProvider methods={methods} onSubmit={onFilter}>
        <Stack direction="row" alignItems="center">
          <RHFDatePicker label="start date" name="start_date" />
          <RHFDatePicker label="end date" name="end_date" />
          <ProductCategoryNames
            customOption={<option value="all">All</option>}
          />
          <Box>
            <LoadingButton
              loading={methods.formState.isSubmitting}
              type="submit"
              variant="contained"
            >
              filter
            </LoadingButton>
          </Box>
        </Stack>
      </RHFProvider>
    </Card>
  );
};
export default ProductFilter;

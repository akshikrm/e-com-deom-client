import { FunctionComponent, ReactNode } from "react";
import RHFSelect from "@/components/rhf/select";
import useFetchProductCategoryNames from "./hooks/use-product-category-names";

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

export default ProductCategoryNames;

"use client";
import InputItem from "@/components/input-item";
import { FunctionComponent, useMemo } from "react";
import { getValueFromForm } from "@/utils/form";
import { FormState } from "../add/actions";

type Props = {
  addProduct: (payload: FormData) => void;
  state: FormState;
};

const ProductForm: FunctionComponent<Props> = ({ addProduct, state }) => {
  const getValue = useMemo(
    () => getValueFromForm(state.payload),
    [state.payload],
  );

  return (
    <>
      <form action={addProduct}>
        <InputItem
          id="product-name"
          name="name"
          label="Product Name"
          defaultValue={getValue("name")}
          errors={state.errors?.name}
        />
        <InputItem
          id="product-slug"
          name="slug"
          label="Product URL"
          defaultValue={getValue("slug")}
          errors={state.errors?.slug}
        />
        <InputItem
          id="product-description"
          name="description"
          label="Product Description"
          defaultValue={getValue("description")}
          errors={state.errors?.description}
        />
        <InputItem
          id="product-price"
          name="price"
          label="Product Price"
          errors={state.errors?.price}
          defaultValue={getValue("price")}
        />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};
export default ProductForm;

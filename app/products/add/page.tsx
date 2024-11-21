"use client";
import Card from "@/components/card";
import InputItem from "@/components/input-item";
import { useActionState, useMemo } from "react";
import { handleSubmit } from "./actions";
import { getValueFromForm } from "@/utils/form";

export default function AddProduct() {
  const [state, addProduct] = useActionState(handleSubmit, {});

  const getValue = useMemo(
    () => getValueFromForm(state.payload),
    [state.payload],
  );

  return (
    <Card>
      Add Product
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
    </Card>
  );
}

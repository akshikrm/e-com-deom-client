import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name is required",
    })
    .min(1, { message: "name is required" }),
  slug: z
    .string({
      required_error: "product url is required",
      invalid_type_error: "product url is required",
    })
    .min(1, { message: "product url is required" }),
  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description is required",
    })
    .min(1, { message: "description is required" }),
  price: z
    .string({
      required_error: "price is requred",
      invalid_type_error: "price should be a number",
    })
    .min(1, { message: "price should be greater than zero" }),
});

const newProductDefaultValues: NewProduct = {
  name: "",
  slug: "",
  description: "",
  price: "",
};

const useProductForm = () => {
  const methods = useForm<NewProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: newProductDefaultValues,
  });

  return methods;
};

export default useProductForm;
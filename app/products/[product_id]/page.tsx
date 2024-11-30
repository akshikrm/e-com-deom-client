import ProductForm from "../components/product-form";
import { getProductById, updateProduct } from "./handler";

type Props = {
  params: Promise<{ product_id: number }>;
};

export default async function EditProduct({ params }: Props) {
  const { product_id } = await params;

  const { data } = await getProductById(product_id);
  return (
    <>
      <ProductForm
        buttonLabel="update"
        defaultValues={data}
        onSubmit={updateProduct(product_id)}
      />
    </>
  );
}

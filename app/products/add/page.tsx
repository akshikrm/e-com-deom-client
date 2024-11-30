import ProductForm from "../components/product-form";
import { Card } from "@mui/material";
import { createProduct } from "../handler";

export default function AddProduct() {
  return (
    <>
      <Card>
        <ProductForm onSubmit={createProduct} buttonLabel="create" />
      </Card>
    </>
  );
}

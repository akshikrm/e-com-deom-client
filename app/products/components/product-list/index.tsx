import ProductFilter from "./product-filter";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Link from "next/link";
import RenderList from "@/components/render-list";
import Render from "@/components/render";
import { getProducts } from "../../handler";
import DeleteButton from "./delete-button";
// import DeleteProduct from "../delete-product";

type Props = {
  isAdmin: boolean;
  searchParams: Promise<Filter>;
};

export default async function ProductList({ isAdmin, searchParams }: Props) {
  const filter = await searchParams;
  const products = await getProducts(filter);

  return (
    <>
      {/* <ProductFilter filter={filter} /> */}
      {/* <DeleteProduct /> */}
      <Stack>
        <RenderList
          list={products}
          render={(item: Product) => {
            return (
              <Card key={item.id}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                  <Render
                    when={isAdmin}
                    show={
                      <Stack spacing={2} direction="row">
                        <Button
                          color="warning"
                          LinkComponent={Link}
                          href={`/products/${item.id}`}
                        >
                          edit
                        </Button>
                        <DeleteButton productId={item.id} />
                      </Stack>
                    }
                  />
                </Stack>
              </Card>
            );
          }}
        />
      </Stack>
    </>
  );
}
// export default ProductList;

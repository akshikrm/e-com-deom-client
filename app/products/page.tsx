import { getJWT, checkRole } from "@/utils/auth";
import { redirect } from "next/navigation";
import ProductList from "./components/product-list";
import { Button } from "@mui/material";
import Link from "next/link";
import HeaderBreadcrumbs from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "List of products",
};

export default async function Products() {
  const jwt = await getJWT();

  if (!jwt) {
    redirect("auth/login");
  }

  const isAdmin = await checkRole("admin");

  return (
    <>
      <HeaderBreadcrumbs
        heading="Product List"
        links={[
          {
            label: "home",
            href: "/",
          },
          {
            label: "products",
          },
        ]}
        action={
          <Button LinkComponent={Link} color="primary" href="/products/add">
            add
          </Button>
        }
      />
      <ProductList isAdmin={isAdmin} />
    </>
  );
}

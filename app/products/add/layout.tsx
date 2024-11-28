import HeaderBreadcrumbs from "@/components/header";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products | Add",
  description: "List of products",
};

export default async function AddLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Add Product"
        links={[
          {
            label: "home",
            href: "/",
          },
          {
            label: "products",
            href: "/products",
          },
          {
            label: "add",
          },
        ]}
      />
      {children}
    </>
  );
}

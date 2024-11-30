import HeaderBreadcrumbs from "@/components/header";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products | Edit",
  description: "Edit a  Product",
};

export default async function EditLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Edit Product"
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
            label: "edit",
          },
        ]}
      />
      {children}
    </>
  );
}

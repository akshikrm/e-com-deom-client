import AddButton from "./components/add-button";
import { getJWT, checkRole } from "@/utils/auth";
import { redirect } from "next/navigation";
import ProductList from "./components/product-list";

export default async function Products() {
  const jwt = await getJWT();

  if (!jwt) {
    redirect("auth/login");
  }

  const isAdmin = await checkRole("admin");

  return (
    <>
      <div className="flex justify-between">
        <h1 className="capitalize">products list</h1>
        {isAdmin ? <AddButton /> : null}
      </div>
      <ProductList isAdmin={isAdmin} />
    </>
  );
}

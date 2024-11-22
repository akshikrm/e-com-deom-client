import Button from "@/components/button";
import Card from "@/components/card";
import AddButton from "./components/add-button";
import { getProducts } from "./handler";
import { getJWT, checkRole } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Products() {
  const products = await getProducts();

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
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products?.map((item) => {
          return (
            <Card key={item.id}>
              <p className="text-xl capitalize">{item.name}</p>
              <p className="text-sm text-slate-500">{item.description}</p>
              {isAdmin ? (
                <>
                  <Button>edit</Button>
                  <Button variant="danger">delete</Button>
                </>
              ) : null}
            </Card>
          );
        })}
      </div>
    </>
  );
}

import Button from "@/components/button";
import Card from "@/components/card";
import AddButton from "./components/add-button";
import { getProducts } from "./handler";

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="capitalize">products list</h1>
        <AddButton />
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products.map((item) => {
          return (
            <Card key={item.id}>
              <p className="text-xl capitalize">{item.name}</p>
              <p className="text-sm text-slate-500">{item.description}</p>
              <Button>edit</Button>
              <Button variant="danger">delete</Button>
            </Card>
          );
        })}
      </div>
    </>
  );
}

import Button from "@/components/button";
import Card from "@/components/card";
import { BASE_URL } from "@/config";
import { getJWT } from "@/utils/auth";

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
};

const getProducts = async (): Promise<Product[]> => {
  const jwt = await getJWT();
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: jwt,
      },
    });
    const parsedResponse = await response.json();
    return parsedResponse.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <div className="container mx-auto">
        <h1 className="capitalize">products list</h1>
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
      </div>
    </>
  );
}

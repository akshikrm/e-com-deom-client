type NewProduct = {
  name: string;
  slug: string;
  description: string;
  price: string;
};

type EditProduct = {
  name?: string;
  slug?: string;
  description?: string;
  price?: string;
};

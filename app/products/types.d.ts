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

type Filter = {
  start_date: string;
  end_date: string;
  category_id: string;
};

type ProductCategoryNames = {
  id: number;
  name: string;
  slug: string;
};

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
};

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
  start_date: string | null;
  end_date: string | null;
  category_id: string | null;
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

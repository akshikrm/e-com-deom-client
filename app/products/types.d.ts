type NewProduct = {
  name: string;
  slug: string;
  description: string;
  category_id: string;
  price: string;
};

type EditProduct = {
  name?: string;
  slug?: string;
  description?: string;
  price?: string;
  category_id?: string;
};

// type Filter = Record<
// 	"start_date" | "end_date" | "category_id" | string,
// 	string
// >;

type Filter = {
  [key: string]: string | null;
  start_date?: string | null;
  end_date?: string | null;
  category_id?: string | null;
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

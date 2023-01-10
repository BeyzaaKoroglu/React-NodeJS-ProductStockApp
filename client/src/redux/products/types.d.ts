export type ProductsStateType = {
  allProducts: Array<ProductType>;
  searchKey: string;
};

export type ProductType = {
  _id: string;
  name: string;
  stock: number;
  createdAt: date;
};

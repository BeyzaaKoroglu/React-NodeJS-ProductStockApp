export type ProductsStateType = {
  allProducts: Array<ProductType>;
  searchKey: String;
};

export type ProductType = {
  _id: String;
  name: String;
  stock: Number;
  createdAt: Date;
};

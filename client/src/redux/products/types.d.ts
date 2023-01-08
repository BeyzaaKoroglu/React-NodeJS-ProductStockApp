export type ProductsStateType = {
  allProducts: Array<ProductType>;
};

export type ProductType = {
  _id: String;
  name: String;
  stock: Number;
  createdAt: Date;
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteProduct, getAllProducts } from './services';
import { ProductsStateType, ProductType } from './types';

const initialState: ProductsStateType = {
  allProducts: [],
  searchKey: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleSearchKey(state, action: PayloadAction<string>) {
      state.searchKey = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.allProducts = action.payload;
      }
    );
  },
});

export const { handleSearchKey } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllProducts } from './services';
import { ProductsStateType, ProductType } from './types';

const initialState: ProductsStateType = {
  allProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.allProducts = action.payload;
      }
    );
  },
});

export default productsSlice.reducer;

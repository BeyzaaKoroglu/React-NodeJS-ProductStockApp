import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const res = await instance.get('/products');
    return res.data.products;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: String) => {
    const res = await instance.delete(`/products/${id}`);
  }
);

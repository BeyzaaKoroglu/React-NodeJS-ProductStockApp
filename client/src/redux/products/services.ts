import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormValuesType } from '../../components/Modal/Modal.types';
import instance from '../instance';
import { ProductType } from './types';

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

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product: FormValuesType) => {
    const res = await instance.post(`/products`, product);
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product: ProductType) => {
    const res = await instance.put(`/products/${product._id}`, {
      name: product.name,
      stock: product.stock,
    });
  }
);

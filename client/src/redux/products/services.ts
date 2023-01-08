import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const res = await axios.get('http://localhost:5000/products');
    return res.data.products;
  }
);

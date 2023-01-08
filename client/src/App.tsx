import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { getAllProducts } from './redux/products/services';
import { useAppDispatch } from './redux/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;

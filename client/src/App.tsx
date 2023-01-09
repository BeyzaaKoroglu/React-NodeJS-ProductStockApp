import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import ProductList from './components/ProductList';
import { getAllProducts } from './redux/products/services';
import { useAppDispatch, useAppSelector } from './redux/store';

function App() {
  const showModal = useAppSelector((state) => state.modal.showModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ProductList />
      {showModal && <Modal />}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { ProductType } from '../../redux/products/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Product from '../Product';
import { Styled } from './ProductList.styled';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const searchKey = useAppSelector((state) => state.products.searchKey);
  const [filteredList, setFilteredList] = useState<ProductType[]>([]);

  useEffect(() => {
    setFilteredList(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [allProducts, searchKey]);

  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('addModal'));
  };

  return (
    <Styled>
      <ul>
        <li>
          <b>Product</b>
          <b>Stock</b>
          <b></b>
          <b>
            <button onClick={handleAddClick}>Add New Product</button>
          </b>
        </li>
        {filteredList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;

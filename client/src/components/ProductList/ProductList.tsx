import { useEffect, useState } from 'react';
import { ProductType } from '../../redux/products/types';
import { useAppSelector } from '../../redux/store';
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

  return (
    <Styled>
      <ul>
        <li>
          <b>Product</b>
          <b>Stock</b>
          <b></b>
          <b></b>
        </li>
        {filteredList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;

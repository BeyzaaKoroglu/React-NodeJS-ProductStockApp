import { useAppSelector } from '../../redux/store';
import Product from '../Product';
import { Styled } from './ProductList.styled';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);

  return (
    <Styled>
      <ul>
        <li>
          <b>Product</b>
          <b>Stock</b>
          <b></b>
          <b></b>
        </li>
        {allProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;

import { FC } from 'react';
import { Styled } from './Product.styled';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <Styled>
      <span>{product.name}</span>
      <span>{String(product.stock)}</span>
      <span>
        <button className="editBtn">Edit</button>
      </span>
      <span>
        <button className="deleteBtn">Delete</button>
      </span>
    </Styled>
  );
};

export default Product;

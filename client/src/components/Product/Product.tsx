import { FC } from 'react';
import { deleteProduct, getAllProducts } from '../../redux/products/services';
import { useAppDispatch } from '../../redux/store';
import { Styled } from './Product.styled';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    if (window.confirm('Are you sure?'))
      dispatch(deleteProduct(product._id)).then(() =>
        dispatch(getAllProducts())
      );
  };

  return (
    <Styled>
      <span>{product.name}</span>
      <span>{String(product.stock)}</span>
      <span>
        <button className="editBtn">Edit</button>
      </span>
      <span>
        <button className="deleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </span>
    </Styled>
  );
};

export default Product;

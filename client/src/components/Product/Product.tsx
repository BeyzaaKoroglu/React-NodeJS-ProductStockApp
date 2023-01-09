import { FC } from 'react';
import {
  handleEditProduct,
  handleModalType,
  handleShowModal,
} from '../../redux/modal/modalSlice';
import { deleteProduct, getAllProducts } from '../../redux/products/services';
import { useAppDispatch } from '../../redux/store';
import { Styled } from './Product.styled';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('editModal'));
    dispatch(handleEditProduct(product));
  };

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
        <button className="editBtn" onClick={handleEditClick}>
          Edit
        </button>
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

import { ChangeEvent, useState } from 'react';
import { handleShowModal } from '../../redux/modal/modalSlice';
import { getAllProducts, updateProduct } from '../../redux/products/services';
import { ProductType } from '../../redux/products/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Styled } from './UseForm.styled';

const UseForm = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ProductType>({
    _id: '',
    name: '',
    stock: 0,
    createdAt: '',
  });
  const [quantity, setQuantity] = useState<number>(0);

  const handleProductChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProduct(
      allProducts.find((product) => product._id === e.target.value) || {
        _id: '',
        name: '',
        stock: 0,
        createdAt: '',
      }
    );
    setQuantity(0);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleUseClick = () => {
    if (product._id !== '')
      dispatch(
        updateProduct({ ...product, stock: product.stock - quantity })
      ).then(() => dispatch(getAllProducts()));
    dispatch(handleShowModal());
  };

  const handleCancelClick = () => {
    dispatch(handleShowModal());
  };

  return (
    <Styled>
      <h2>Use Product</h2>
      <select defaultValue={''} onChange={handleProductChange} name="productID">
        <option value={''}>Choose Product</option>
        {allProducts.map((product, index) => (
          <option value={product._id} key={index}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        onChange={handleQuantityChange}
        name="quantity"
        placeholder="Quantity"
        value={quantity}
        min={0}
        max={product.stock}
        type="Number"
      />
      <button onClick={handleUseClick} className="addBtn">
        Use
      </button>
      <button onClick={handleCancelClick}>Cancel</button>
    </Styled>
  );
};

export default UseForm;

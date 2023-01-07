import { Styled } from './ProductList.styled';

const ProductList = () => {
  return (
    <Styled>
      <ul>
        <li>
          <b>Product</b>
          <b>Stock</b>
          <b></b>
          <b></b>
        </li>
        <li>
          <span>Dress</span>
          <span>2</span>
          <span>
            <button className="editBtn">Edit</button>
          </span>
          <span>
            <button className="deleteBtn">Delete</button>
          </span>
        </li>
        <li>
          <span>Shoes</span>
          <span>5</span>
          <span>
            <button className="editBtn">Edit</button>
          </span>
          <span>
            <button className="deleteBtn">Delete</button>
          </span>
        </li>
        <li>
          <span>Shirt</span>
          <span>8</span>
          <span>
            <button className="editBtn">Edit</button>
          </span>
          <span>
            <button className="deleteBtn">Delete</button>
          </span>
        </li>
      </ul>
    </Styled>
  );
};

export default ProductList;

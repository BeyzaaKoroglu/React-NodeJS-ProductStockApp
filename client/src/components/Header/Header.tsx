import Search from '../Search';
import { Styled } from './Header.styled';

const Header = () => {
  return (
    <Styled>
      <p>
        Manage <b>Products</b>
      </p>
      <Search />
      <button>Add New Product</button>
    </Styled>
  );
};

export default Header;

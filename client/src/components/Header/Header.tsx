import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { useAppDispatch } from '../../redux/store';
import Search from '../Search';
import { Styled } from './Header.styled';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('useModal'));
  };
  return (
    <Styled>
      <p>
        Manage <b>Products</b>
      </p>
      <Search />
      <button onClick={handleClick}>Use Product</button>
    </Styled>
  );
};

export default Header;

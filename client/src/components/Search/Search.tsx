import { ChangeEvent } from 'react';
import { handleSearchKey } from '../../redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { StateType } from '../../redux/types';
import { Styled } from './Search.styled';

const Search = () => {
  const dispatch = useAppDispatch();
  const searchKey = useAppSelector(
    (state: StateType) => state.products.searchKey
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearchKey(e.target.value));
  };
  return (
    <Styled onChange={handleChange} value={searchKey} placeholder="Search" />
  );
};

export default Search;

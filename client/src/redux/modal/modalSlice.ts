import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../products/types';
import { ModalStateType, ModalType } from './types';

const initialState: ModalStateType = {
  showModal: false,
  modalType: '',
  editProduct: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleShowModal(state) {
      state.showModal = !state.showModal;
    },
    handleModalType(state, action: PayloadAction<ModalType>) {
      state.modalType = action.payload;
    },
    handleEditProduct(state, action: PayloadAction<ProductType>) {
      state.editProduct = action.payload;
    },
  },
});

export const { handleShowModal, handleModalType, handleEditProduct } =
  modalSlice.actions;
export default modalSlice.reducer;

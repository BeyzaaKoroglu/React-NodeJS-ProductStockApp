import { ProductType } from '../products/types';

export type ModalStateType = {
  showModal: Boolean;
  modalType: ModalType;
  editProduct?: ProductType;
};

export type ModalType = 'addModal' | 'editModal' | '';

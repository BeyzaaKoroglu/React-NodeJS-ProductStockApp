import { ProductType } from '../products/types';

export type ModalStateType = {
  showModal: boolean;
  modalType: ModalType;
  editProduct?: ProductType;
};

export type ModalType = 'addModal' | 'editModal' | 'useModal' | '';

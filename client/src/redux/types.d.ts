import { ModalStateType } from './modal/types';
import { ProductsType } from './products/types';

export type StateType = {
  products: ProductsType;
  modal: ModalStateType;
};

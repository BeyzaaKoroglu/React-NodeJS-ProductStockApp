import { useAppSelector } from '../../redux/store';
import AddEditForm from '../AddEditForm';
import UseForm from '../UseForm';
import { Styled } from './Modal.styled';

const Modal = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);

  return (
    <Styled>{modalType === 'useModal' ? <UseForm /> : <AddEditForm />}</Styled>
  );
};

export default Modal;

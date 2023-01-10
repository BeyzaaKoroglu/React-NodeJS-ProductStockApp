import { ChangeEvent, useEffect, useState } from 'react';
import { handleShowModal } from '../../redux/modal/modalSlice';
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from '../../redux/products/services';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const AddEditForm = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const modalType = useAppSelector((state) => state.modal.modalType);
  const editProduct = useAppSelector((state) => state.modal.editProduct);
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<any>({
    name: '',
    stock: 0,
  });
  useEffect(() => {
    if (modalType === 'editModal' && editProduct)
      setFormValues({
        name: editProduct.name,
        stock: editProduct.stock,
      });
  }, []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    if (formValues.name === '') alert('Product name is required');
    else {
      if (allProducts.find((product) => product.name === formValues.name))
        alert('The product already exists');
      else {
        dispatch(createProduct(formValues)).then(() =>
          dispatch(getAllProducts())
        );
        dispatch(handleShowModal());
      }
    }
  };

  const handleEditClick = () => {
    if (formValues.name === '') alert('Product name is required');
    else {
      if (
        allProducts.find((product) => product.name === formValues.name) &&
        formValues.name !== editProduct?.name
      )
        alert('The product already exists');
      else {
        editProduct &&
          dispatch(updateProduct({ ...formValues, _id: editProduct._id })).then(
            () => dispatch(getAllProducts())
          );
        dispatch(handleShowModal());
      }
    }
  };

  const handleCancelClick = () => {
    dispatch(handleShowModal());
  };

  return (
    <div>
      {modalType === 'addModal' ? (
        <h2>Add New Product</h2>
      ) : (
        <h2>Edit Product</h2>
      )}

      <input
        onChange={handleChange}
        name="name"
        value={formValues.name}
        placeholder="Product Name"
        type="Text"
      />
      <input
        onChange={handleChange}
        name="stock"
        value={formValues.stock}
        placeholder="Stock"
        min={0}
        type="Number"
      />
      {modalType === 'addModal' ? (
        <button onClick={handleAddClick} className="addBtn">
          Add
        </button>
      ) : (
        <button onClick={handleEditClick} className="addBtn">
          Edit
        </button>
      )}

      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

export default AddEditForm;

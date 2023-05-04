import { useEffect } from 'react';
import {
  Backdrop,
  ModalWindow,
  CloseSvg,
  ButtonClose,
  ModalForm,
  ModalInput,
  InputWrapper,
} from './ModalAddTransactions.styled';
import { createPortal } from 'react-dom';
import { Formik, ErrorMessage } from 'formik';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = ({ onClose, onSubmit }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
    onClose();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <CloseSvg />
        </ButtonClose>
        <Formik
          initialValues={{
            type: 'expense',
            category: '',
            sum: '',
            date: new Date(),
            comment: '',
          }}
          onSubmit={handleSubmit}
        >
          <ModalForm>
            <div>
              <ModalInput type="radio" id="income" name="type" value="income" />
              <label htmlFor="income">Income</label>

              <ModalInput
                type="radio"
                id="expense"
                name="type"
                value="expense"
              />
              <label htmlFor="expense">Expense</label>
            </div>
            <ModalInput component="select" name="category">
              <option value="" hidden>
                Choose a category
              </option>
              <option value="salary">Salary</option>
              <option value="bonus">Bonus</option>
              <option value="other">Other</option>
            </ModalInput>
            <ErrorMessage name="category" />
            <InputWrapper>
              <ModalInput type="number" name="sum" placeholder="0.00" />
              <ErrorMessage name="sum" />
              <ModalInput type="date" name="date" placeholder="Enter date" />
              <ErrorMessage name="date" />
            </InputWrapper>
            <ModalInput name="comment" placeholder="Comment" />
            <ErrorMessage name="comment" />
            <button type="submit">Submit</button>
          </ModalForm>
        </Formik>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

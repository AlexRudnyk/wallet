import { useEffect, useState } from 'react';
import {
  Backdrop,
  ModalWindow,
  CloseSvg,
  ButtonClose,
  ModalForm,
  ModalInput,
  InputWrapper,
  ModalTitle,
  SwitcherButtonVert,
  SwitcherButtonGor,
  SwitchWrapper,
} from './ModalAddTransactions.styled';
import { createPortal } from 'react-dom';
import { Formik, ErrorMessage } from 'formik';
import Switch from 'react-switch';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = ({ onClose, onSubmit }) => {
  const [checked, setChecked] = useState(false);

  const type = checked ? 'income' : 'expense';

  const handleChange = nextChecked => {
    setChecked(nextChecked);
    console.log('TYPE', type);
  };

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
    console.log('VALUES', values);
    onSubmit(values);
    resetForm();
    onClose();
  };

  const CustomSwitch = props => {
    return (
      <>
        <SwitchWrapper>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            height={30}
            width={78}
            handleDiameter={44}
            offColor="#FFFFFF"
            onColor="#FFFFFF"
            offHandleColor="#24CCA7"
            onHandleColor="#FF6596"
            boxShadow={
              checked
                ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
                : '0px 6px 15px rgba(36, 204, 167, 0.5)'
            }
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={
              <>
                <SwitcherButtonVert />
                <SwitcherButtonGor />
              </>
            }
            checkedHandleIcon={<SwitcherButtonGor />}
          />
        </SwitchWrapper>
      </>
    );
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <CloseSvg />
        </ButtonClose>
        <ModalTitle>Add Transaction</ModalTitle>
        <Formik
          initialValues={{
            type: '',
            category: '',
            sum: '',
            date: new Date(),
            comment: '',
          }}
          onSubmit={handleSubmit}
        >
          <ModalForm>
            {/* <div>
              <ModalInput type="radio" id="income" name="type" value="income" />
              <label htmlFor="income">Income</label>

              <ModalInput
                type="radio"
                id="expense"
                name="type"
                value="expense"
              />
              <label htmlFor="expense">Expense</label>
            </div> */}

            <ModalInput component={CustomSwitch} />
            {/* <SwitchWrapper> */}
            {/* <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                height={30}
                width={78}
                handleDiameter={44}
                offColor="#FFFFFF"
                onColor="#FFFFFF"
                offHandleColor="#24CCA7"
                onHandleColor="#FF6596"
                boxShadow={
                  checked
                    ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
                    : '0px 6px 15px rgba(36, 204, 167, 0.5)'
                }
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={
                  <>
                    <SwitcherButtonVert />
                    <SwitcherButtonGor />
                  </>
                }
                checkedHandleIcon={<SwitcherButtonGor />}
              /> */}
            {/* </SwitchWrapper> */}
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
            <button type="submit">Add</button>
            <button type="button" onClick={() => onClose()}>
              Cancel
            </button>
          </ModalForm>
        </Formik>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

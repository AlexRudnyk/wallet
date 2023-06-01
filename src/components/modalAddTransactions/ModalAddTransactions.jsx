import { useEffect, useState } from 'react';
import {
  Backdrop,
  ModalWindow,
  CloseSvg,
  ButtonClose,
  ModalForm,
  InputWrapper,
  ModalTitle,
  SwitcherButtonVert,
  SwitcherButtonGor,
  SwitchWrapper,
  AddTransactionsBtn,
  CancelTransactionsBtn,
  ModalInputSum,
  ModalInputSelect,
  ModalInputDate,
  ModalInputComment,
  IncomeText,
  ExpenseText,
  LabelBtnWrapper,
  SelectOption,
} from './ModalAddTransactions.styled';
import { createPortal } from 'react-dom';
import { Formik, ErrorMessage } from 'formik';
import Switch from 'react-switch';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = ({ onClose, onSubmit }) => {
  const [checked, setChecked] = useState(true);

  const type = checked ? 'income' : 'expense';

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
        <ModalTitle>Add transaction</ModalTitle>
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
          {({ values, setFieldValue }) => (
            <ModalForm>
              <LabelBtnWrapper>
                <IncomeText
                  nonActive={checked}
                  onClick={e => {
                    if (e.currentTarget === e.target) {
                      setChecked(!checked);
                      setFieldValue('type', type);
                    }
                  }}
                >
                  Income
                </IncomeText>
                <SwitchWrapper>
                  <Switch
                    name="type"
                    onChange={nextChecked => {
                      setChecked(nextChecked);
                      setFieldValue('type', type);
                    }}
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
                <ExpenseText
                  nonActive={!checked}
                  onClick={e => {
                    if (e.currentTarget === e.target) {
                      setChecked(!checked);
                      setFieldValue('type', type);
                    }
                  }}
                >
                  Expense
                </ExpenseText>
              </LabelBtnWrapper>
              {type === 'income' ? (
                <ModalInputSelect component="select" name="category">
                  <SelectOption value="" hidden>
                    Choose a category
                  </SelectOption>
                  <SelectOption value="house">House</SelectOption>
                  <SelectOption value="utilities">Utilities</SelectOption>
                  <SelectOption value="food">Food</SelectOption>
                  <SelectOption value="health">Health</SelectOption>
                  <SelectOption value="clothes">Clothes</SelectOption>
                  <SelectOption value="goods">Goods</SelectOption>
                  <SelectOption value="children">Children</SelectOption>
                  <SelectOption value="education">Education</SelectOption>
                  <SelectOption value="sports">Sports</SelectOption>
                  <SelectOption value="car">Car</SelectOption>
                  <SelectOption value="other">Other...</SelectOption>
                </ModalInputSelect>
              ) : (
                <ModalInputSelect component="select" name="category">
                  <SelectOption value="" hidden>
                    Choose a category
                  </SelectOption>
                  <SelectOption value="salary">Salary</SelectOption>
                  <SelectOption value="bonus">Bonus</SelectOption>
                  <SelectOption value="gift">Gift</SelectOption>
                  <SelectOption value="other">Other...</SelectOption>
                </ModalInputSelect>
              )}
              <ErrorMessage name="category" />
              <InputWrapper>
                <ModalInputSum type="number" name="sum" placeholder="0.00" />
                <ErrorMessage name="sum" />
                <ModalInputDate
                  name="date"
                  data-enable-time
                  options={{
                    maxDate: 'today',
                    enableTime: false,
                    dateFormat: 'd.m.Y',
                    defaultDate: 'today',
                  }}
                  onChange={date => {
                    setFieldValue('date', date[0]);
                  }}
                />
                <ErrorMessage name="date" />
              </InputWrapper>
              <ModalInputComment name="comment" placeholder="Comment" />
              <ErrorMessage name="comment" />
              <AddTransactionsBtn type="submit">Add</AddTransactionsBtn>
              <CancelTransactionsBtn type="button" onClick={() => onClose()}>
                Cancel
              </CancelTransactionsBtn>
            </ModalForm>
          )}
        </Formik>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

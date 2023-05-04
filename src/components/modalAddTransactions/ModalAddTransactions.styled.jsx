import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/Сlose.svg';
import { Form, Field } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 10;
  padding: 20px;
`;

export const ModalWindow = styled.div`
  position: absolute;
  overflow: auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;

  width: 540px;
  height: 508px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.small};
`;

export const ButtonClose = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: var(--white);
  }
`;

export const CloseSvg = styled(Close)`
  text-align: center;
  width: 16px;
  height: 16px;
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled(Field)`
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/Сlose.svg';
import { Form, Field } from 'formik';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

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
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  overflow: auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;

  width: 540px;
  height: 572px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.small};

  padding: 40px;
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

export const ModalTitle = styled.h2`
  margin-bottom: 30px;
  font-family: ${p => p.theme.fonts.textSecond};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.lineHeights.logo};
  text-shadow: 0px 4px 4px ${p => p.theme.colors.modalBackdrop};
  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.logo};
    font-family: ${p => p.theme.fonts.textSecond};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: 30px;
  }
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInput = styled(Field)`
  margin-bottom: 30px;
`;

export const ModalInputSelect = styled(ModalInput)`
  width: 280px;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  border: none;
  padding: ${p => p.theme.space[3]}px;
  background-color: white;
  border-bottom: 1px solid ${p => p.theme.colors.textBalance};
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const ModalInputSum = styled(ModalInput)`
  margin-right: 30px;
  width: 182px;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  border: none;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.textBalance};
  text-align: center;
  &:focus {
    outline: none !important;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ModalInputDate = styled(Flatpickr)`
  height: 43.8px;
  margin-bottom: 30px;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  width: 182px;
  border: none;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.textBalance};
  text-align: center;
  &:focus {
    outline: none !important;
  }
`;

export const ModalInputComment = styled(ModalInput)`
  width: 280px;
  height: 84px;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  border: none;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.textBalance};
  &:focus {
    outline: none !important;
  }

  @media screen and (min-width: 768px) {
    width: 392px;
    height: 40px;
  }
`;

export const SwitcherButtonVert = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  top: 12px;
  left: 21px;
`;

export const SwitcherButtonGor = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  left: 12px;
  top: 20px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid ${p => p.theme.colors.inputBorder};
  border-radius: 30px;
`;

export const Button = styled.button`
  display: inline;
  width: 300px;
  height: 50px;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

export const AddTransactionsBtn = styled(Button)`
  border: none;
  margin-bottom: 20px;
  background: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.white};
`;

export const CancelTransactionsBtn = styled(Button)`
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.activeBlue};
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.activeBlue};
`;

export const IncomeText = styled.p`
  cursor: pointer;
  margin-right: 20px;
  padding-top: 10px;
  color: ${props => (props.nonActive ? '#E0E0E0' : '#24CCA7')};
`;
export const ExpenseText = styled.p`
  cursor: pointer;
  margin-left: 20px;
  padding-top: 10px;
  color: ${props => (props.nonActive ? '#E0E0E0' : '#FF6596')};
`;

export const LabelBtnWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

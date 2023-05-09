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
  height: 508px;
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
  margin-bottom: 40px;
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
  margin-bottom: 40px;
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

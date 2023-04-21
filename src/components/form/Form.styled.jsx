import styled from 'styled-components';
import { ReactComponent as Eye } from '../../images/VectorEyes.svg';
import { ReactComponent as EyeClose } from '../../images/VectorEyeClose.svg';
import { ReactComponent as Lock } from '../../images/lock.svg';
import { ReactComponent as Envelope } from '../../images/email.svg';
import { ReactComponent as Account } from '../../images/account.svg';
import { Field, Form } from 'formik';

export const Base = styled.div`
  display: block;
  height: 4px;
  box-shadow: 1px -2px 16px #e3e8e3;
  margin-top: 1px;
  transition: 1s;
  width: 0%;
  border-radius: 25px;
`;

export const FormContainer = styled(Form)`
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const InputContainer = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled(Field)`
  padding: 10px 55px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid ${p => p.theme.colors.inputBorder};
  width: 280px;
  outline: none;
  font-family: ${p => p.theme.fonts.text};
  /* font-weight: var(--regular); */
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  @media screen and (min-width: 767px) {
    width: 409.5px;
    height: 32px;
  }
  ::placeholder {
    color: ${p => p.theme.colors.inputTxt};
    font-family: ${p => p.theme.fonts.text};
    /* font-weight: var(--regular); */
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1;
  }
`;

export const ErrorTextPassword = styled.p`
  margin-top: 5px;
  position: absolute;
  color: ${p => p.theme.colors.errorMessage};
  font-size: ${p => p.theme.fontSizes[0]};
  font-family: ${p => p.theme.fonts.text};
  /* font-weight: var(--regular); */
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[1]};
  }
`;

export const SvgEnvelope = styled(Envelope)`
  position: absolute;
  top: ${p => p.theme.space[1]}px;
  left: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    top: ${p => p.theme.space[1]}px;
  }
`;

export const SvgAccount = styled(Account)`
  position: absolute;
  top: ${p => p.theme.space[1]}pxpx;
  left: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    top: ${p => p.theme.space[1]}px;
  }
`;

export const SvgLock = styled(Lock)`
  position: absolute;
  top: ${p => p.theme.space[1]}px;
  left: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    top: ${p => p.theme.space[1]}px;
  }
`;

export const ButtonShow = styled(Eye)`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    right: ${p => p.theme.space[0]}px;
    top: ${p => p.theme.space[0]}px;
  }
`;

export const ButtonHide = styled(EyeClose)`
  position: absolute;
  padding: 7px 7px;
  right: ${p => p.theme.space[0]}px;
  top: -3px;
  fill: ${p => p.theme.colors.inputTxt};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: ${p => p.theme.space[0]}px;
    top: ${p => p.theme.space[0]}px;
  }
`;

export const RegisterButtonRegPage = styled.button`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  width: 280px;
  border-radius: ${p => p.theme.radii.big};
  height: 50px;
  border: none;
  font-family: ${p => p.theme.fonts.text};
  /* font-weight: var(--regular); */
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

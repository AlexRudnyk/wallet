import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../redux/auth/operations';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { PasswordInput } from './PasswordInput';
import {
  Input,
  InputContainer,
  InputWrapper,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterButtonRegPage,
  // LoginButtonRegPage,
  // ErrorText,
  FormContainer,
  ButtonShow,
  ButtonHide,
} from './Form.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(16, 'must be less than 16 characters')
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'available latin-based alphabet, numeric character and _ . + -'
    )
    .min(6, 'must be at least 6 characters')
    .max(63, 'email length must be less than 63 characters')
    .required(),
  password: yup
    .string()
    .min(6, 'must be at least 6 characters')
    .max(12, 'password length must be less than 13 characters')
    .matches(/^(?!.*\s)/, ' whitespaces are forbidden.')
    .matches(/^(?=.*[0-9])/, 'must contain at least one numeric character')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'must contain at least: one upper case letter, one lower case letter, only latin-based alphabet'
    )
    .required(),
  repeated_password: yup
    .string()
    .oneOf([yup.ref('password')], 'both passwords need to be the same')
    .required('is required field'),
});

export const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const confirmPassInFocus = useRef();

  const dispatch = useDispatch();

  const Pass = e => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (confirmPassInFocus.active) {
      confirmPassInFocus.current.focus();
    }
  }, [confirmPassInFocus]);

  const showHide = () => {
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeated_password: '',
  };

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    const resultSignup = await dispatch(signup({ name, email, password }));
    toast.success(`Welcome ${name}!`);

    if (resultSignup.type === 'auth/signup/fulfilled') {
      await dispatch(login({ email, password }));
    }
    if (resultSignup.type === 'auth/signup/rejected') {
      toast.error(resultSignup.payload.message);
    }
    setPassword('');
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer>
          <InputContainer>
            <InputWrapper id="email">
              <SvgEnvelope />
              <Input id="email" name="email" placeholder="Email" type="email" />
            </InputWrapper>
            <ErrorMessage name="email" />
          </InputContainer>
          <PasswordInput onInput={Pass} password={password} />
          <InputContainer>
            <InputWrapper id="repeated_password">
              {type === 'input' ? (
                <ButtonShow onClick={showHide} />
              ) : (
                <ButtonHide onClick={showHide} />
              )}
              <SvgLock />
              <Input
                id="repeated_password"
                name="repeated_password"
                type={type}
                placeholder="Confirm password"
                innerRef={confirmPassInFocus}
              />
            </InputWrapper>
            <ErrorMessage name="repeated_password" />
          </InputContainer>
          <InputContainer>
            <InputWrapper id="name">
              <SvgAccount />
              <Input
                id="name"
                name="name"
                placeholder="First name"
                type="text"
              />
            </InputWrapper>
            <ErrorMessage name="name" />
          </InputContainer>
          <RegisterButtonRegPage type="submit">Register</RegisterButtonRegPage>
        </FormContainer>
      </Formik>
    </>
  );
};

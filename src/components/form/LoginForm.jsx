import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import * as yup from 'yup';
import {
  ErrorText,
  FormContainer,
  Input,
  InputContainer,
  InputWrapper,
  SvgEnvelope,
  LoginButtonLogPage,
  RegisterButtonLogPage,
} from './Form.styled';
import { ButtonShowAndHide } from './ButtonShow';
import { toast } from 'react-toastify';
import axios from 'axios';

const schema = yup.object().shape({
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
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values));
      const { data } = await axios('/api/users/current');
      toast.success(`Welcome ${data.name}!`);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <InputContainer>
            <InputWrapper id="email">
              <SvgEnvelope />
              <Input id="email" name="email" placeholder="Email" type="email" />
            </InputWrapper>
            <FormError name="email" />
          </InputContainer>
          <InputContainer>
            <ButtonShowAndHide />
          </InputContainer>
          <LoginButtonLogPage type="submit">log in</LoginButtonLogPage>
        </FormContainer>
      </Formik>
      {/* <Link to="/wallet_frontend/register"> */}
      <RegisterButtonLogPage type="button">register</RegisterButtonLogPage>
      {/* </Link> */}
    </>
  );
};

import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/operations';
import * as yup from 'yup';

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
  // repeated_password: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'both passwords need to be the same')
  //   .required('is required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    // repeated_password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(signup(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div>
            <label id="email">
              <Field id="email" name="email" placeholder="Email" type="email" />
            </label>
            <ErrorMessage name="email" />
          </div>
          <div>
            <label id="password">
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </label>
            <ErrorMessage name="password" />
          </div>
          <div>
            <label id="name">
              <Field
                id="name"
                name="name"
                placeholder="First name"
                type="text"
              />
            </label>
            <ErrorMessage name="name" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

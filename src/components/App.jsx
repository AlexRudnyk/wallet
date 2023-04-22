import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { refreshUser } from 'redux/auth/operations';
// import { RegisterPage } from '../pages/Auth';
import { LoginPage } from '../pages/Auth';
import { GlobalStyle } from '../globalStyles/globalStyle';
import FontStyles from '../globalStyles/fontStyles';

export const App = () => {
  const {
    // isRefreshing,
    isLoggedIn,
  } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <LoginPage />
      <FontStyles />
      <GlobalStyle />
    </>
  );
};

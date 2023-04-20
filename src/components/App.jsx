import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { refreshUser } from 'redux/auth/operations';
import { RegisterPage } from '../pages/Auth';
import { LoginPage } from '../pages/Auth';

export const App = () => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <RegisterPage />
      <LoginPage />
    </>
  );
};

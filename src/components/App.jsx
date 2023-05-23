import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { refreshUser } from 'redux/auth/operations';
import { RegisterPage } from '../pages/Auth';
import { LoginPage } from '../pages/Auth';
import { GlobalStyle } from '../globalStyles/globalStyle';
import FontStyles from '../globalStyles/fontStyles';
import { PrivateRoute, RestrictedRoute } from './routes';
import { Dashboard } from 'pages/Dashboard';

// const LazyPrivateRoute = lazy(() => import('./routes/PrivateRoute'));
// const LazyRestrictedRoute = lazy(() => import('./routes/RestrictedRoute'));

export const App = () => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/dashboard"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/dashboard" />
            }
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} redirectTo="/login" />}
          />
          <Route
            path="/currency"
            element={<PrivateRoute component={Dashboard} redirectTo="/login" />}
          />
          <Route
            path="/diagram"
            element={<PrivateRoute component={Dashboard} redirectTo="/login" />}
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <FontStyles />
        <GlobalStyle />
      </>
    )
  );
};

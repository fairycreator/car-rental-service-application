import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { RestrictedRoute } from './components/Routes/RestrictedRoute.jsx';
import { PrivateRoute } from './components/Routes/PrivateRoute.jsx';
import { refreshUser } from './redux/auth/authOperations.js';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage.jsx'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage.jsx'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage.jsx'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPasswordPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const RecommendedFoodPage = lazy(() => import('pages/RecommendedFoodPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />
        <Route
          path="/welcome"
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignInPage />} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RestrictedRoute
              redirectTo="/main"
              component={<ForgotPasswordPage />}
            />
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DashboardPage />} />
          }
        />
        <Route
          path="/diary"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DiaryPage />} />
          }
        />
        <Route
          path="/recommended-food"
          element={
            <PrivateRoute
              redirectTo="/welcome"
              component={<RecommendedFoodPage />}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute redirectTo="/welcome" component={<SettingsPage />} />
          }
        />
        <Route
          path="*"
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />
      </Route>
    </Routes>
  );
}
export default App;

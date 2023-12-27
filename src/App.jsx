import PuffLoader from "react-spinners/PuffLoader";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { RestrictedRoute } from './pages/Routes/RestrictedRoute.jsx';
import { PrivateRoute } from './pages/Routes/PrivateRoute.jsx';
import { refreshUser } from './redux/auth/authOperations.js';
import { selectIsRefreshing } from "./redux/auth/authSelectors.js";

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage.jsx'));
const SignUpPage = lazy(() => import('pages/SignUpPage.jsx'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage.jsx'));
const ForgotPasswordPage = lazy(() =>
  import('pages/ForgotYourPasswordPage/ForgotPasswordPage.jsx')
);
const MainPage = lazy(() => import('pages/MainPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const RecommendedFoodPage = lazy(() => import('pages/RecommendedFoodPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <PuffLoader color="var(--primary-color-green-lite)" cssOverride={{ margin: '30vh auto 0 auto' }} />
  ) : (
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
          element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/" component={<DashboardPage />} />
          }
        />
        <Route
          path="/diary"
          element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
        />
        <Route
          path="/recommended-food"
          element={
            <PrivateRoute redirectTo="/" component={<RecommendedFoodPage />} />
          }
        />
        <Route
          path="/settings"
          element={<PrivateRoute redirectTo="/" component={<SettingsPage />} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};
export default App;

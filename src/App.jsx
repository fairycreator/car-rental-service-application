import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPasswordPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const RecommendedFoodPage = lazy(() => import('pages/RecommendedFoodPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));

import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/recommended-food" element={<RecommendedFoodPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;

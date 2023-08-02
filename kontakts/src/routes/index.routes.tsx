import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import RegisterPage from '../pages/registerPage';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import ProductsPage from '../pages/products-page/products-page';
import ProtectedRoute from './protected-route';
import { AppRoute } from '../const/const';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Navigate to={AppRoute.PRODUCTS} replace />} />
        <Route path={AppRoute.PRODUCTS} element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        } />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.NOT_FOUND} element={<ErrorPage />} />
        <Route path='*' element={<Navigate to={AppRoute.NOT_FOUND} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
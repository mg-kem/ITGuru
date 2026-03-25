import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/login-page';
import Catalog from '../pages/catalog-page';
import ProtectedRoute from './protected-route';
import { AppRoute } from '../const/const';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';

function App(): React.JSX.Element {
  return (

    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Navigate to={AppRoute.CATALOG} replace />} />
        <Route path={AppRoute.CATALOG} element={
          <ProtectedRoute>
            <Catalog />
          </ProtectedRoute>
        } />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.NOT_FOUND} element={<ErrorPage />} />
        <Route path='*' element={<Navigate to={AppRoute.NOT_FOUND} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
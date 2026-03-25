import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/utils';
import type { IProtectedRouteProps } from '../types/types.props';
import { AppRoute } from '../const/const';

function ProtectedRoute({ children }: IProtectedRouteProps): React.JSX.Element {
  return getToken()
    ? <>{children}</>
    : <Navigate to={AppRoute.LOGIN} replace />;
}

export default ProtectedRoute;
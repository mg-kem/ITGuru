import './error-page.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function ErrorPage(): React.JSX.Element {
  return (
    <section className="error-page">
      <p className="error-page__code">404</p>
      <h1 className="error-page__title">Страница не найдена</h1>
      <p className="error-page__text">
        Возможно, ссылка устарела или страница была перемещена.
      </p>

      <Link className="error-page__link" to={AppRoute.ROOT}>
        Вернуться на главную
      </Link>
    </section>
  );
}

export default ErrorPage;
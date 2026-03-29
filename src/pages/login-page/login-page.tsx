import { toast } from 'react-toastify';
// import loginUser from '../../services/login-user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useAppDispatch } from '../../hooks/useStore';
import { loginAsyncAction } from '../../store/thunk/userThunk';


function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (evt: React.FormEvent) => {
    evt.preventDefault();
    const toastId = toast.loading('Выполняется вход...');

    dispatch(loginAsyncAction({
      username: userName,
      password,
      rememberMe
    }))
      .unwrap()
      .then(() => {
        navigate(AppRoute.PRODUCTS, { replace: true });
        toast.update(toastId, {
          render: 'Вход выполнен успешно',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
        const errorMessage = err ? err.message : 'Неизвестная ошибка';
        toast.update(toastId, {
          render: errorMessage,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      });
  }


  return (
    <section className="auth-content">
      <div className="auth-form">
        <img src="../../public/img/logo.png" alt="" className="auth-form__image" />
        <h2 className="auth-form-title">Добро пожаловать!</h2>
        <p className="auth-form__description">Пожалуйста, авторизуйтесь</p>

        <form action="" className="auth-form__form" onSubmit={handleLogin}>

          <div className="form__data">
            <label htmlFor="login" className="form__label">Логин</label>
            <input type="text" id='login' value={userName} onChange={(evt) => setUserName(evt.target.value)} className="form__input" placeholder='Введите логин' />

            <label htmlFor="password" className="form__label">Пароль</label>
            <input type="password" id='password' value={password} onChange={(evt) => setPassword(evt.target.value)} className="form__input" placeholder='Введите пароль' />
          </div>

          <div className="form__checkbox">
            <input
              type="checkbox"
              id='checkbox'
              className="form__checkbox-input"
              checked={rememberMe}
              onChange={(evt) => setRememberMe(evt.target.checked)}
            />
            <label htmlFor="checkbox" className="form__checkbox-label">Запомнить данные</label>
          </div>

          <button className="form__button">Войти</button>
        </form>

        <div className="divider">
          <span>
            или
          </span>
        </div>

        <div className="form-footer">
          <span>Нет аккаунта? <a href="#">Создать</a></span>
        </div>

      </div>
    </section>
  )
}

export default LoginPage;
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthorizedCtx } from '../../../app/App';
import { errorLogin } from '../const/const';
import { AuthorizeUser } from '../fetch/fetch';
import { closeDivError, popupClose, viewButtonLogin } from '../utils/utils';
import { ErrorDiv } from './errorMessage';
import './form.css';

export default function LoginIn() {
  const navigate = useNavigate();

  const [, setAuthrize] = useContext(AuthorizedCtx);
  type FormValues = {
    email: string;
    password: string;
  };
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    const submitButtonLogin = document.getElementById('idSubmitLogin') as HTMLInputElement;
    submitButtonLogin.disabled = true;
    const result = await AuthorizeUser(data);
    if (Object.values(result).length > 1) {
      localStorage.setItem('userData', JSON.stringify(result));
      localStorage.setItem('timeToken', JSON.stringify(new Date()));
      viewButtonLogin(true);
      setAuthrize(true);
      popupClose();
      reset();
    } else {
      const divError = document.getElementById('divError');
      closeDivError(divError);
    }
    submitButtonLogin.disabled = false;
    navigate('../');
  };

  return (
    <form
      className="login form_body"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('email', {
          required: 'Поле обязательно к заполнению',
          pattern: {
            value: /^\S+@\S+$/,
            message: "должен быть символ '@' ",
          },
        })
        }
        type="email"
        className="popup_input login"
        placeholder="Email Address"
      />
      <div style={{ height: 25 }}>
        {errors?.email && <p className="errorForm">{errors?.email?.message || 'Error!'}</p>}
      </div>
      <input
        {...register('password', {
          required: 'Поле обязательно к заполнению',
          minLength: {
            value: 8,
            message: 'от 8 до 12 символов',
          },
          maxLength: {
            value: 12,
            message: 'от 8 до 12 символов',
          },
        })
        }
        type="password"
        className="popup_input login"
        autoComplete="on"
        placeholder="Password"
      />
      <div style={{ height: 25 }}>
        {errors?.password && <p className="errorForm">{errors?.password?.message || 'Error!'}</p>}
      </div>
      <input type="submit" id="idSubmitLogin" className="btn popup_btn login" value="sign in" />
      <ErrorDiv message={errorLogin} />
    </form>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import './form.css';
import { BiHide, BiShow } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthorizedCtx } from '../../../app/App';
import { errorLogin } from '../const/const';
import { AuthorizeUser } from '../fetch/fetch';
import { closeDivError, popupClose, viewButtonLogin } from '../utils/utils';
import { ErrorDiv } from './errorMessage';

export default function LoginIn() {
  const navigate = useNavigate();

  const [, setAuthrize] = useContext(AuthorizedCtx);
  const [showPassword, setShowPassword] = useState(true);
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

  function togglePasswordVisibility() {
    return setShowPassword(!showPassword);
  }

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
          required: 'The field must be filled in',
          pattern: {
            value: /^\S+@\S+$/,
            message: "There must be a symbol '@' ",
          },
        })
        }
        type="email"
        className="popup_input login"
        placeholder="Email Address"
      />
      <div className="error_message">
        {errors?.email && <p className="errorForm">{errors?.email?.message || 'Error!'}</p>}
      </div>
      <div className="password_form">
        <input
          {...register('password', {
            required: 'The field must be filled in',
            minLength: {
              value: 8,
              message: 'From 8 to 12 characters',
            },
            maxLength: {
              value: 12,
              message: 'From 8 to 12 characters',
            },
          })
          }
          type={showPassword ? 'password' : 'text'}
          className="popup_input password_input login"
          autoComplete="on"
          placeholder="Password"
        />
        <button type="button" className="password_btn" onClick={togglePasswordVisibility}>
          {showPassword ? <BiHide /> : <BiShow />}
        </button>
      </div>
      <div className="error_message">
        {errors?.password && <p className="errorForm">{errors?.password?.message || 'Error!'}</p>}
      </div>
      <input type="submit" id="idSubmitLogin" className="btn popup_btn login" value="sign in" />
      <ErrorDiv message={errorLogin} />
    </form>
  );
}

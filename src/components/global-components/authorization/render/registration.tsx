/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { BiHide, BiShow } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { closeDivError, popupClose, viewButtonLogin } from '../utils/utils';
import { AuthorizedCtx } from '../../../app/App';
import { AuthorizeUser, createNewUser, upsertStatistics } from '../fetch/fetch';
import { errorEmail, errorLogin } from '../const/const';
import { ErrorDiv, ErrorDivEmail } from './errorMessage';

export default function Registration() {
  const navigate = useNavigate();

  const [, setAuthrize] = useContext(AuthorizedCtx);
  const [showPassword, setShowPassword] = useState(true);
  type FormValues = {
    name: string;
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
    const submitButtonReg = document.getElementById('idSubmitRegistration') as HTMLInputElement;
    submitButtonReg.disabled = true;
    const { success } = await createNewUser(data);
    if (success) {
      const result = await AuthorizeUser(data);
      if (Object.values(result).length > 1) {
        localStorage.setItem('userData', JSON.stringify(result));
        localStorage.setItem('timeToken', JSON.stringify(new Date()));
        await upsertStatistics();
        setAuthrize(true);
        viewButtonLogin(true);
        popupClose();
        reset();
      } else {
        const divError = document.getElementById('divError');
        closeDivError(divError);
      }
    } else {
      const divError = document.getElementById('divErrorEmail');
      closeDivError(divError);
    }
    submitButtonReg.disabled = false;
    navigate('../');
  };

  return (
    <form
      className="form_body registration hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('name', {
          required: 'The field must be filled in',
          minLength: {
            value: 3,
            message: 'From 3 characters',
          },
        })
        }
        type="text"
        className="popup_input registration"
        placeholder="Name (3 characters minimum)"
      />
      <div style={{ height: 25 }}>
        {errors?.name && <p className="errorForm">{errors?.name?.message || 'Error!'}</p>}
      </div>

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
        className="popup_input registration"
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
          type="password"
          className="password_input registration"
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
      <input type="submit" id="idSubmitRegistration" className="btn popup_btn registration" value="registration" />
      <ErrorDiv message={errorLogin} />
      <ErrorDivEmail message={errorEmail} />
    </form>
  );
}

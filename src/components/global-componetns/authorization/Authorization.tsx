import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import logIn from '../../../assets/images/userOut.png';
import logOut from '../../../assets/images/userIn.png';
import ErrorMessage from './errorMesage';

export default function Authorization() {
  const [signUpError, setSignUpError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  function popupOpen() {
    document.getElementById('openModal')!.classList.remove('hidden');
    if (false) { // должна быть проверка на авторизовался ли пользователь
      document.querySelector('.btn_login')!.classList.toggle('hidden');
      document.querySelector('.btn_logout')!.classList.toggle('hidden');
    }
  }

  function popupClose() {
    document.getElementById('openModal')!.classList.add('hidden');
  }

  function passwordVisible() {
    return setShowPassword(!showPassword);
  }

  function loginForm() {
    document.getElementById('login_form')!.classList.add('active');
    document.getElementById('registration_form')!.classList.remove('active');
    document.querySelectorAll('.login')!.forEach((item) => {
      item.classList.remove('hidden');
    });
    document.querySelectorAll('.registration')!.forEach((item) => {
      item.classList.add('hidden');
    });
  }

  function registrationForm() {
    document.getElementById('registration_form')!.classList.add('active');
    document.getElementById('login_form')!.classList.remove('active');
    document.querySelectorAll('.registration')!.forEach((item) => {
      item.classList.remove('hidden');
    });
    document.querySelectorAll('.login')!.forEach((item) => {
      item.classList.add('hidden');
    });
  }

  return (
    <div className="header_authorization">
      <div className="authorization_btn">
        <button type="button" className="authorization_btn btn_login" onClick={popupOpen}>
          <img className="authorization_img" src={logIn} alt="logIn" />
          <p className="authorization_title">login</p>
        </button>
        <button type="button" className="authorization_btn btn_logout hidden" onClick={popupOpen}>
          <img className="authorization_img" src={logOut} alt="logOut" />
          <p className="authorization_title title_logout">logout</p>
        </button>
      </div>
      <div id="openModal" className="modal hidden">
        <div className="modal_popup">
          <div className="popup_header">
            <button type="button" id="login_form" className="form_btn active" onClick={loginForm}>login</button>
            <div className="vertical" />
            <button type="button" id="registration_form" className="form_btn" onClick={registrationForm}>registration</button>
            <button type="button" className="popup_btn_close" onClick={popupClose}>×</button>
          </div>
          <div className="popup_body">
            <form className="login form_body">
              {signUpError && <ErrorMessage />}
              <input
                type="email"
                className="popup_input login"
                placeholder="Email Address"
                onChange={(item) => setUserData({ ...userData, email: item.target.value })}
                required
              />
              <div className="password_form login">
                <input
                  type={showPassword ? 'password' : 'text'}
                  className="password_input login"
                  placeholder="Password"
                  onChange={(item) => {
                    setUserData({ ...userData, password: item.target.value });
                    if (item.target.value.length > 7 && item.target.value.length < 13) {
                      setSignUpError('');
                    }
                  }}
                  required
                />
                <button type="button" className="password_btn login" onClick={passwordVisible}>
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>
              <button type="submit" className="btn popup_btn login">sign in</button>
            </form>
            <form className="form_body registration hidden">
              {signUpError && <ErrorMessage />}
              <input
                type="text"
                name="name"
                className="popup_input registration hidden"
                placeholder="Name (3 characters minimum)"
                onChange={(item) => {
                  setUserData({ ...userData, name: item.target.value });
                  if (item.target.value.length > 2) {
                    setSignUpError('');
                  }
                }}
                required
              />
              <input
                type="email"
                name="email"
                className="popup_input registration hidden"
                placeholder="Email Address"
                onChange={(item) => setUserData({ ...userData, email: item.target.value })}
                required
              />
              <div className="password_form registration hidden">
                <input
                  type={showPassword ? 'password' : 'text'}
                  name="password"
                  className="password_input registration"
                  placeholder="Password (from 8 to 12 characters)"
                  value={userData.password}
                  onChange={(item) => {
                    setUserData({ ...userData, password: item.target.value });
                    if (item.target.value.length > 7 && item.target.value.length < 13) {
                      setSignUpError('');
                    }
                  }}
                  required
                />
                <button type="button" className="password_btn registration" onClick={passwordVisible}>
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>
              <button type="submit" className="btn popup_btn registration hidden">registration</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

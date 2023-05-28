import { useContext } from 'react';
// import logIn from '../../../assets/images/userOut.png';
// import logOut from '../../../assets/images/userIn.png';
import { popupOpen, loginForm, registrationForm, popupClose, exitPage } from './utils/utils';
import Registration from './render/registration';
import { AuthorizedCtx } from '../../app/App';
import LoginIn from './render/loginIn';

export default function Authorization() {
  const [authrize, setAuthrize] = useContext(AuthorizedCtx);

  return (
    <div className="header_authorization">
      <div className="authorization_btn">
        <button type="button" className="authorization_btn btn_login" id="btn_login" onClick={() => popupOpen(authrize)}>
          <img className="authorization_img" src="https://react-rslang-back-app.onrender.com/files/img/userOut.png" alt="logIn" />
          <p className="authorization_title">login</p>
        </button>
        <button type="button" className="authorization_btn btn_logout hidden" id="btn_logout" onClick={() => exitPage(setAuthrize)}>
          <img className="authorization_img" src="https://react-rslang-back-app.onrender.com/files/img/userIn.png" alt="logOut" />
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
            <LoginIn />
            <Registration />
          </div>
        </div>
      </div>
    </div>
  );
}

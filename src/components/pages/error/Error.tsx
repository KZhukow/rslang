import './error.css';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
// import logo from '../../../assets/images/logo.png';

export default function Error() {
  return (
    <div id="errorPage">
      <main className="error">
        <h1 className="error_title">The page you were looking for can`t be found.</h1>
        <div className="error_subtitle">
          <h2>Please go to the main page and try again</h2>
          <BiRightArrowAlt className="error_arrow" />
          <div className="header_logo">
            <Link to="/" className="logo_link">
              <img className="logo_img" src="https://react-rslang-back-app.herokuapp.com/files/img/logo.png" alt="Logo" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import rssLogo from '../../../assets/images/rssLogo.png';
import KZhukow from '../../../assets/images/KZhukow.png';
import Mikkumo from '../../../assets/images/Mikkumo.png';
import yamarauder from '../../../assets/images/yamarauder.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <a className="footer_item" href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <img className="footer_item_img" src={rssLogo} alt="RS School" />
        </a>
        <span className="footer_year">2022</span>
        <div className="footer_link">
          <a className="github_link" href="https://github.com/KZhukow" target="_blank" rel="noreferrer">
            <img className="footer_item_img github_logo" src={KZhukow} alt="GitHub KZhukow" />
          </a>
          <a className="github_link" href="https://github.com/Mikkumo" target="_blank" rel="noreferrer">
            <img className="footer_item_img github_logo" src={Mikkumo} alt="GitHub Mikkumo" />
          </a>
          <a className="github_link" href="https://github.com/yamarauder" target="_blank" rel="noreferrer">
            <img className="footer_item_img github_logo" src={yamarauder} alt="GitHub Yamarauder" />
          </a>
        </div>
      </div>
    </footer>
  );
}

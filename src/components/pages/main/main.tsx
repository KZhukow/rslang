import './main.css';
import { Link } from 'react-router-dom';
import KZhukow from '../../../assets/images/KZhukow.png';
import Lissa from '../../../assets/images/Lissa.png';
import Yamarauder from '../../../assets/images/yamarauder.png';

export default function Main() {
  return (
    <div id="mainPage">
      <main className="main">
        <section className="section_start">
          <div className="about_title">
            <h2 className="title_text">Welcome to rsLang</h2>
            <div className="title_underline" />
          </div>
        </section>
        <div className="gap light_gap" />
        <section className="section_about">
          <div className="about_title">
            <h2 className="title_text">OUR TEAM</h2>
            <div className="title_underline" />
          </div>
          <div className="main_slider">
            <article className="slider_item">
              <div className="item_container">
                <img className="container_img" src={KZhukow} alt="KZhukow" />
              </div>
              <h5 className="item_title">Zhukov Konstantin</h5>
            </article>
            <article className="slider_item">
              <div className="item_container">
                <img className="container_img" src={Lissa} alt="Mikkumo" />
              </div>
              <h5 className="item_title">Sokolovskaya Lissa</h5>
            </article>
            <article className="slider_item">
              <div className="item_container">
                <img className="container_img" src={Yamarauder} alt="Yamarauder" />
              </div>
              <h5 className="item_title">Hurkov Valera</h5>
            </article>
          </div>
          <Link to="/about" className="about_btn btn">About developers</Link>
        </section>
      </main>
    </div>
  );
}

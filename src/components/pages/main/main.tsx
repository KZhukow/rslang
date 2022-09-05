import './main.css';
import { Link } from 'react-router-dom';
import KZhukow from '../../../assets/images/KZhukow.png';
import Lissa from '../../../assets/images/Lissa.png';
import Yamarauder from '../../../assets/images/yamarauder.png';
import glossary from '../../../assets/images/glossary.png';
import games from '../../../assets/images/games.png';
import statistic from '../../../assets/images/statistic.png';

export default function Main() {
  return (
    <div id="mainPage">
      <main className="main">
        <section className="section_start">
          <div className="start_title">
            <h2 className="title_text">Welcome to rsLang!</h2>
            <div className="title_underline" />
          </div>
          <div className="start_text">
            <p>Use a fast and effective way to learn English.</p>
            <p>All the best techniques in one place.</p>
          </div>
          <div className="start_list">
            <article className="start_list_item">
              <img className="start_item_img" src={glossary} alt="Glossary" />
              <h5 className="start_item_title">Glossary</h5>
              <p className="start_item_description">
                The electronic textbook consists of six sections. Each section consists
                of 30 pages of 20 words. A translation of the word, a thematic image, as
                well as an example of pronunciation are presented.
              </p>
            </article>
            <article className="start_list_item">
              <img className="start_item_img" src={games} alt="Games" />
              <h5 className="start_item_title">Games</h5>
              <p className="start_item_description">
                To learn words and enhance memorization, there are 2 games in the application:
                Sprint and Audio Challenge, which will help you `pump up` your vocabulary
                in a playful way.
              </p>
            </article>
            <article className="start_list_item">
              <img className="start_item_img" src={statistic} alt="Statistic" />
              <h5 className="start_item_title">Statistic</h5>
              <p className="start_item_description">
                All the progress of training can be viewed in statistics, which presents
                data for the current day, as well as for the entire training period.
                The information is presented both in the form of a table and in the
                form of graphs.
              </p>
            </article>
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

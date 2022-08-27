import React from 'react';
import './about.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';
import KZhukow from '../../../assets/images/KZhukow.png';
import Lissa from '../../../assets/images/Lissa.png';
import Yamarauder from '../../../assets/images/yamarauder.png';

class AboutPage extends React.Component {
  constructor() {
    super(<div />);
  }

  render() {
    return (
      <div id="aboutPage">
        <Header />
        <main className="about">
          <div className="about_list">
            <article className="about_list_item">
              <div id="article" className="about_item_img_border">
                <img className="about_item_img" src={KZhukow} alt="KZhukow" />
              </div>
              <div className="about_item_description">
                <h2 className="about_description_title">Zhukov Konstantin</h2>
                <p className="about_description_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </article>
            <article className="about_list_item right">
              <div className="about_item_img_border">
                <img className="about_item_img" src={Lissa} alt="Lissa" />
              </div>
              <div className="about_item_description">
                <h2 className="about_description_title">Sokolovskaya Lissa</h2>
                <p className="about_description_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </article>
            <article className="about_list_item">
              <div className="about_item_img_border">
                <img className="about_item_img" src={Yamarauder} alt="Yamarauder" />
              </div>
              <div className="about_item_description">
                <h2 className="about_description_title">Hurkov Valera</h2>
                <p className="about_description_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;

import React from 'react';
import './games.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';
import listening from '../../../assets/images/headphone.png';
import sprint from '../../../assets/images/сhronometer.png';

class GamesPage extends React.Component {
  constructor() {
    super(<div />);
  }

  render() {
    return (
      <div id="gamesPage">
        <Header />
        <main className="games">
          <section className="game">
            <div className="game_title_border">
              <button type="button" className="game_btn">
                <img className="game_img" src={listening} alt="Listening" />
              </button>
            </div>
            <p className="game_description_text">
              Check your listening skills, trying to pick the right meaning
              after hearing a word. Be careful, as you just have one guess.
            </p>
          </section>
          <section className="game">
            <div className="game_title_border">
              <button type="button" className="game_btn">
                <img className="game_img" src={sprint} alt="Sprint" />
              </button>
            </div>
            <p className="game_description_text">
              Check how much points you can get in one minute, making educated
              guesses about what is right and what is wrong.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GamesPage;

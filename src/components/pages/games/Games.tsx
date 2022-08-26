import React from 'react';
import './games.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';

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
              <h2 className="game_title_text">listening</h2>
            </div>
            <p className="game_description_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum
            </p>
          </section>
          <section className="game">
            <div className="game_title_border">
              <h2 className="game_title_text">sprint</h2>
            </div>
            <p className="game_description_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              qui officia deserunt mollit anim id est laborum
            </p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GamesPage;

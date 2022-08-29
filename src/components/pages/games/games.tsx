import './games.css';
import { Link } from 'react-router-dom';
import listening from '../../../assets/images/headphone.png';
import sprint from '../../../assets/images/сhronometer.png';

export default function Games() {
  return (
    <div id="gamesPage">
      <main className="games">
        <section className="game">
          <div className="game_title_border">
            <Link to="audio-call" className="game_btn">
              <img className="game_img" src={listening} alt="Listening" />
            </Link>
          </div>
          <p className="game_description_text">
            Check your listening skills, trying to pick the right meaning
            after hearing a word. Be careful, as you just have one guess.
          </p>
        </section>
        <section className="game">
          <div className="game_title_border">
            <Link to="sprint" className="game_btn">
              <img className="game_img" src={sprint} alt="Sprint" />
            </Link>
          </div>
          <p className="game_description_text">
            Check how much points you can get in one minute, making educated
            guesses about what is right and what is wrong.
          </p>
        </section>
      </main>
    </div>
  );
}

import './games.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
// import listening from '../../../assets/images/headphone.png';
// import sprint from '../../../assets/images/сhronometer.png';
import { viewButtonLogin } from '../../global-components/authorization/utils/utils';
import { AuthorizedCtx } from '../../app/App';

export default function Games() {
  const [authrize] = useContext(AuthorizedCtx);
  useEffect(() => {
    viewButtonLogin(authrize);
  }, []);
  return (
    <div id="gamesPage">
      <main className="games">
        <section className="game">
          <div className="game_title_border">
            <Link to="audio-call" className="game_btn">
              <img className="game_img" src="https://react-rslang-back-app.onrender.com/files/img/headphone.png" alt="Listening" />
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
              <img className="game_img" src="https://react-rslang-back-app.onrender.com/files/img/сhronometer.png" alt="Sprint" />
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

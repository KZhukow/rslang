import { useEffect, useState } from 'react';
import './sprint.css';

import { ReactComponent as Lamp } from './img/lamp.svg';
import bird1 from './img/bird1.png';
import bird2 from './img/bird2.png';
import bird3 from './img/bird3.png';
import bird4 from './img/bird4.png';
import stick from './img/stick.png';
// import { wordsPage } from '../tutorial/const';

export default function Sprint() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // if (counter === 0) {
    //   (document.querySelector('.game-result') as HTMLElement).style.display = 'block';
    // }
    return () => clearInterval(timer || '');
  }, [counter]);

  // const [arr, setArr] = useState<any[]>([]);
  // async function fetchWords(): Promise<void> {
  //   const a: any[] = [];
  //   const response1 = fetch(wordsPage(1, 1));
  //   const response2 = fetch(wordsPage(1, 2));
  //   const response3 = fetch(wordsPage(1, 3));
  //   await Promise.all([response1, response2, response3])
  //     .then((val) => Promise.all(val.map((r) => r.json())))
  //     .then((users) => users.forEach((user) => a.push(...user)));
  // await Promise.all([response1, response2, response3])
  //   .then((val) => Promise.all(val.map((r) => r.json())))
  //   .then((users) => users.forEach((user) => a.push(...user)));
  // console.log(a);
  // setArr(a);
  // }
  useEffect(() => {
    // fetchWords();
    // console.log(arr);
  }, []);

  return (
    <div className="game-sprint">
      <div className="game-sprint-container">
        <div className="tools">
          <div className="timer">{counter}</div>
          <div className="score-and-mute">
            <div className="mute">Mute</div>
            <div className="score">0</div>
          </div>
        </div>
        <div className="game-sprint-main-content">
          <div className="lamps">
            <div className="lamp" id="lamp1"><Lamp /></div>
            <div className="lamp" id="lamp2"><Lamp /></div>
            <div className="lamp" id="lamp3"><Lamp /></div>
          </div>
          <div className="birds">
            <img src={bird1} className="bird" id="bird1" alt="bird1" />
            <img src={bird2} className="bird" id="bird2" alt="bird2" />
            <img src={bird3} className="bird" id="bird3" alt="bird3" />
            <img src={bird4} className="bird" id="bird4" alt="bird4" />
            <img src={stick} className="stick" alt="stick" />
          </div>
          <div className="game-speaker-btn">speaker</div>
          <div className="sprint-eng-word">Word</div>
          <div className="sprint-rus-word">Слово</div>
          <div className="choice-btns">
            <button type="button" className="choice-btn choice-btn-right">Right</button>
            <button type="button" className="choice-btn choice-btn-wrong">Wrong</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SyntheticEvent, useEffect, useState } from 'react';
import './sprint.css';

import { ReactComponent as Lamp } from './img/lamp.svg';
import bird1 from './img/bird1.png';
import bird2 from './img/bird2.png';
import bird3 from './img/bird3.png';
import bird4 from './img/bird4.png';
import stick from './img/stick.png';
import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';
import { wordsPage } from '../tutorial/const';

import { IWord } from '../tutorial/types';

import { getNumPages, getWordNum } from './utils';

import SprintAudioBtn from './sprint-audio-btn';

export default function Sprint() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // if (counter === 0) {
    //   (document.querySelector('.game-result') as HTMLElement).style.display = 'block';
    // }
    return () => clearInterval(timer || '');
  }, [counter]);

  const [curGroup, setCurGroup] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [wordArr, setWordArr] = useState<IWord[]>([]);
  const [wordNum, setWordNum] = useState(0);
  const [wordTranslateNum, setWordTranslateNum] = useState(0);
  async function fetchWords() {
    const numPages = getNumPages();
    const response1 = fetch(wordsPage(curGroup, numPages[0]));
    const response2 = fetch(wordsPage(curGroup, numPages[1]));
    const response3 = fetch(wordsPage(curGroup, numPages[2]));
    await Promise.all([response1, response2, response3])
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((wordsArr) => setWordArr(wordsArr.flat().sort(() => Math.random() - Math.random())));
    setLoading(false);
    setCounter(60);
    setWordTranslateNum(getWordNum);
  }

  useEffect(() => {
    if (curGroup !== -1) {
      fetchWords();
    }
  }, [curGroup]);

  function selectGroup(event: SyntheticEvent) {
    const target = event.target as HTMLElement;
    setCurGroup(+target.innerHTML - 1);
  }
  function processingResponse(event: SyntheticEvent) {
    const nameBtn = (event.target as HTMLElement).innerHTML;
    if ((wordNum === wordTranslateNum && nameBtn === 'Right')
        || (wordNum !== wordTranslateNum && nameBtn === 'Wrong')) {
      console.log(true);
    } else {
      console.log(false);
    }
    setWordNum(wordNum + 1);
    setWordTranslateNum(getWordNum(wordNum + 1));
  }
  return (
    <div className="game-sprint">
      {(loading && curGroup !== -1) && (<div className="spinner"><Spinner /></div>)}
      {
        curGroup === -1 && (
          <div className="view-to-select-group">
            <div>Sprint</div>
            <div>
              Check how much points you can get in one minute,
              making educated guesses about what is right and what is wrong.
            </div>
            <div className="btns-to-select-group">
              <button type="button" className="btn-to-select-group group-btn-green" onClick={selectGroup}>1</button>
              <button type="button" className="btn-to-select-group group-btn-yellow" onClick={selectGroup}>2</button>
              <button type="button" className="btn-to-select-group group-btn-orange" onClick={selectGroup}>3</button>
              <button type="button" className="btn-to-select-group group-btn-pink" onClick={selectGroup}>4</button>
              <button type="button" className="btn-to-select-group group-btn-purpure" onClick={selectGroup}>5</button>
              <button type="button" className="btn-to-select-group group-btn-violet" onClick={selectGroup}>6</button>
            </div>
          </div>
        )
      }
      {
        (curGroup !== -1 && !loading) && (
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
              <SprintAudioBtn src={wordArr[wordNum].audio} />
              <div className="sprint-eng-word">{wordArr[wordNum].word}</div>
              <div className="sprint-rus-word">{wordArr[wordTranslateNum].wordTranslate}</div>
              <div className="choice-btns">
                <button type="button" className="choice-btn choice-btn-wrong" onClick={processingResponse}>Wrong</button>
                <button type="button" className="choice-btn choice-btn-right" onClick={processingResponse}>Right</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

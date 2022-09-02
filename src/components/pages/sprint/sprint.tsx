import { SyntheticEvent, useEffect, useState } from 'react';
import './sprint.css';

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { ReactComponent as Lamp } from './img/lamp.svg';
import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';
import bird1 from './img/bird1.png';
import bird2 from './img/bird2.png';
import bird3 from './img/bird3.png';
import bird4 from './img/bird4.png';
import stick from './img/stick.png';
import { wordsPage } from '../tutorial/const';

import { IWord } from '../tutorial/types';

import { getNumPages, getWordNum, playAudioSignal, switchVolumeAudioSignal } from './utils';
import { baseScoreStep, multipliers, audioSignalElCorrect, audioSignalElError, paramsToRestartSprintGame, wordInGame, firstWordInGame } from './const';

import SprintAudioBtn from './sprint-audio-btn';
import GameResult from '../../global-components/game-layout/game-result';

export default function Sprint() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer || '');
  }, [counter]);

  const [curGroup, setCurGroup] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [wordArr, setWordArr] = useState<IWord[]>([]);
  const [wordNum, setWordNum] = useState(0);
  const [wordTranslateNum, setWordTranslateNum] = useState(0);
  const [score, setScore] = useState(0);
  const [lampSeries, setLampSeries] = useState(0);
  const [birdSeries, setBirdSeries] = useState(0);
  const [volumeAudioSignal, setVolumeAudioSignal] = useState(true);
  async function fetchWords() {
    const numPages = getNumPages();
    const response1 = fetch(wordsPage(curGroup, numPages[0]));
    const response2 = fetch(wordsPage(curGroup, numPages[1]));
    const response3 = fetch(wordsPage(curGroup, numPages[2]));
    await Promise.all([response1, response2, response3])
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((wordsArr) => setWordArr(wordsArr.flat().sort(() => Math.random() - Math.random())));
    setLoading(false);
    setCounter(5);
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
    let result = true;
    if ((wordNum === wordTranslateNum && nameBtn === 'Right')
        || (wordNum !== wordTranslateNum && nameBtn === 'Wrong')) {
      setScore(score + baseScoreStep * multipliers[birdSeries]);
      setLampSeries(lampSeries + 1);
      playAudioSignal(true);
    } else {
      setLampSeries(0);
      if (birdSeries) {
        setBirdSeries(birdSeries - 1);
      }
      playAudioSignal(false);
      result = false;
    }
    setWordNum(wordNum + 1);
    setWordTranslateNum(getWordNum(wordNum + 1));
    wordInGame.push({
      audio: wordArr[wordNum].audio,
      word: wordArr[wordNum].word,
      transcription: wordArr[wordNum].transcription,
      wordTranslate: wordArr[wordNum].wordTranslate,
      id: wordArr[wordNum].id,
      result,
    });
  }
  function setDefaultLamp() {
    setLampSeries(0);
  }
  useEffect(() => {
    if (lampSeries === 4) {
      setLampSeries(1);
    }
    if (lampSeries === 3 && birdSeries < 3) {
      setBirdSeries(birdSeries + 1);
    }
  }, [lampSeries]);

  useEffect(() => {
    audioSignalElCorrect.volume = 1;
    audioSignalElError.volume = 1;
    paramsToRestartSprintGame.setCounter = setCounter;
    paramsToRestartSprintGame.setCurGroup = setCurGroup;
    paramsToRestartSprintGame.setLoading = setLoading;
    paramsToRestartSprintGame.setWordNum = setWordNum;
    paramsToRestartSprintGame.setScore = setScore;
    paramsToRestartSprintGame.setLampSeries = setLampSeries;
    paramsToRestartSprintGame.setBirdSeries = setBirdSeries;
    paramsToRestartSprintGame.setVolumeAudioSignal = setVolumeAudioSignal;
    wordInGame.length = 0;
  }, []);

  useEffect(() => {
    if (counter === 1) {
      firstWordInGame[0] = {
        audio: wordArr[0].audio,
        word: wordArr[0].word,
        transcription: wordArr[0].transcription,
        wordTranslate: wordArr[0].wordTranslate,
        id: wordArr[0].id,
        result: false,
      };
    }
  }, [counter]);

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
        (curGroup !== -1 && !loading && counter > 0 && wordNum < 60) && (
          <div className="game-sprint-container">
            <div className="tools">
              <div className="timer">{counter}</div>
              <div className="score-and-mute">
                <button type="button" className="mute-btn" onClick={() => switchVolumeAudioSignal(setVolumeAudioSignal)}>
                  {volumeAudioSignal && <FaVolumeMute color="gray" size="100%" />}
                  {!volumeAudioSignal && <FaVolumeUp color="gray" size="100%" />}
                </button>
                <div className="score">{score}</div>
              </div>
            </div>
            <div className="game-sprint-main-content">
              <div className="lamps">
                <div className={`lamp ${lampSeries > 0 ? 'lamp-active' : ''}`} id="lamp1"><Lamp /></div>
                <div className={`lamp ${lampSeries > 1 ? 'lamp-active' : ''}`} id="lamp2"><Lamp /></div>
                <div className={`lamp ${lampSeries > 2 ? 'lamp-active' : ''}`} id="lamp3" onAnimationEnd={setDefaultLamp}><Lamp /></div>
              </div>
              <div className="birds">
                <img src={bird1} className="bird bird-active" id="bird1" alt="bird1" />
                <img src={bird2} className={`bird ${birdSeries > 0 ? 'bird-active' : ''}`} id="bird2" alt="bird2" />
                <img src={bird3} className={`bird ${birdSeries > 1 ? 'bird-active' : ''}`} id="bird3" alt="bird3" />
                <img src={bird4} className={`bird ${birdSeries > 2 ? 'bird-active' : ''}`} id="bird4" alt="bird4" />
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
      {
        (!loading && ((counter === 0 || wordNum === 60) && curGroup !== -1)) && (
          <GameResult />
        )
      }
    </div>
  );
}

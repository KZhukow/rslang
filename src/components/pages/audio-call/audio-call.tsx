import './audio-call.css';
import { SyntheticEvent, useState, useEffect } from 'react';
import AnswerContentCall from './render/audio-call-answer';

import WordsContentCall from './render/audio-call-content-words';
import { IWord } from '../tutorial/types';
import { paramsToRestartAudiocallGame, svgAmoutWord0, svgAmoutWord1, svgAmoutWord2, svgAmoutWord3, svgAmoutWord4, svgAmoutWord5, svgAmoutWord6, svgAmoutWord7, svgAmoutWord8, svgAmoutWord9, wordsPage } from './const/const';
import { getNumPages } from './utils/utils';
import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';
import CallAudioBtn from './render/audio-call-sound';
import GameResult from '../../global-components/game-layout/game-result';
import SwitchVolumeAudioSignal from './render/switchVolumeAudioSignal';
import { audioSignalElCorrect, audioSignalElError, gameResult } from '../sprint/const';

export default function AudioCall() {
  const [curGroup, setCurGroup] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [wordArr, setWordArr] = useState<IWord[]>([]);
  const [wordNum, setWordNum] = useState(0);
  const [bestSeria, setBestSeria] = useState<Array<number>>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  async function fetchWords() {
    const numPages = getNumPages();
    const response1 = fetch(wordsPage(curGroup, numPages[0]));
    const response2 = fetch(wordsPage(curGroup, numPages[1]));
    const response3 = fetch(wordsPage(curGroup, numPages[2]));
    await Promise.all([response1, response2, response3])
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((wordsArr) => setWordArr(wordsArr.flat().sort(() => Math.random() - Math.random())));
    setLoading(false);
  }

  useEffect(() => {
    audioSignalElCorrect.volume = 1;
    audioSignalElError.volume = 1;
    paramsToRestartAudiocallGame.setCurGroup = setCurGroup;
    paramsToRestartAudiocallGame.setLoading = setLoading;
    paramsToRestartAudiocallGame.setWordNum = setWordNum;
    paramsToRestartAudiocallGame.setBestSeria = setBestSeria;
    gameResult.wordInGame.length = 0;
  }, []);

  useEffect(() => {
    if (curGroup !== -1) {
      fetchWords();
    }
  }, [curGroup]);

  function selectGroup(event: SyntheticEvent) {
    const target = event.target as HTMLElement;
    setCurGroup(+target.innerHTML - 1);
  }

  return (
    <div className="game-audio-call" role="presentation">
      {(loading && curGroup !== -1) && (<div className="spinner"><Spinner /></div>)}
      {
        curGroup === -1 && (
          <div className="view-to-select-group">
            <h3 className="select_group_title">Audio Call</h3>
            <p>
              You hear the word and see 5 possible translations.
              You don`t see how this word is spelled in English.
              Your task is to choose the correct translation of the spoken word.
            </p>
            <div className="btns-to-select-group">
              <button type="button" className="btn-to-select-group group_btn_first" onClick={selectGroup}>1</button>
              <button type="button" className="btn-to-select-group group_btn_second" onClick={selectGroup}>2</button>
              <button type="button" className="btn-to-select-group group_btn_third" onClick={selectGroup}>3</button>
              <button type="button" className="btn-to-select-group group_btn_fourth" onClick={selectGroup}>4</button>
              <button type="button" className="btn-to-select-group group_btn_fifth" onClick={selectGroup}>5</button>
              <button type="button" className="btn-to-select-group group_btn_sixth" onClick={selectGroup}>6</button>
            </div>
          </div>
        )
      }
      {(curGroup !== -1 && !loading && wordNum < 10) && (
        <div className="wrapper-game-audio-call">
          <div className="wrapperSwitchVolumeAudioSignalCall">
            <SwitchVolumeAudioSignal />
          </div>
          <div className="tablCallAnswer">
            {svgAmoutWord0}
            {svgAmoutWord1}
            {svgAmoutWord2}
            {svgAmoutWord3}
            {svgAmoutWord4}
            {svgAmoutWord5}
            {svgAmoutWord6}
            {svgAmoutWord7}
            {svgAmoutWord8}
            {svgAmoutWord9}
          </div>
          <div className="wrapper-call-and-answer">
            <CallAudioBtn src={wordArr[wordNum].audio} curGroup={curGroup} />
            <AnswerContentCall word={wordArr[wordNum]} />
          </div>
          <WordsContentCall
            words={wordArr}
            word={wordArr[wordNum]}
            wordNum={wordNum}
            setWordNum={setWordNum}
            setbestSeria={setBestSeria}
            bestSeriaArray={bestSeria}
          />
        </div>
      )}
      {
        (!loading && ((wordNum === 10) && curGroup !== -1)) && (
          <GameResult />
        )
      }
    </div>
  );
}

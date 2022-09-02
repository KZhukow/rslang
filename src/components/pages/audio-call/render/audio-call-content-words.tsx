/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { CardPropWords, IWord, wordProps } from '../interfaces/interfaces';
import { randomNumber, WordsSupportCall } from '../utils/utils';

export default function WordsContentCall({ words, word, wordNum, setWordNum }: CardPropWords) {
  const arrFiveNumber: Array<number> = [-1, -1, -1, -1, -1];
  const randomNum = Math.floor(Math.random() * 5);
  const fiveWords: Array<IWord> = [];
  let openOneChoise = true;
  for (let i = 0; i < arrFiveNumber.length; i += 1) {
    let numberRandom = randomNumber();
    while (arrFiveNumber) {
      if (arrFiveNumber.includes(numberRandom)) {
        numberRandom = randomNumber();
      } else {
        arrFiveNumber[i] = numberRandom;
        break;
      }
    }
  }
  if (!arrFiveNumber.includes(wordNum)) {
    arrFiveNumber[randomNum] = wordNum;
  }

  for (let i = 0; i < arrFiveNumber.length; i += 1) {
    fiveWords.push(words[arrFiveNumber[i]]);
  }

  function NextWordGoCall(change: boolean) {
    const dontButtonNext = document.getElementById('dont-know-call-button');
    const nextContentNext = document.getElementById('next-button-call-word');
    if (change) {
      dontButtonNext?.classList.add('call-hidden');
      nextContentNext?.classList.remove('call-hidden');
    } else {
      dontButtonNext?.classList.remove('call-hidden');
      nextContentNext?.classList.add('call-hidden');
    }
  }
  function ChangeViewAnswerSong(change: boolean) {
    const soundButton = document.getElementById('song-wrapper-call');
    const answerContent = document.getElementById('answer-word-call');
    if (change) {
      // console.log('hidden call call');
      soundButton?.classList.add('call-hidden');
      answerContent?.classList.remove('call-hidden');
      NextWordGoCall(change);
    } else {
      // console.log('hidden call answer');
      soundButton?.classList.remove('call-hidden');
      answerContent?.classList.add('call-hidden');
      NextWordGoCall(change);
    }
  }

  function choiseDontKnowButtonCall() {
    const idRightWord = `call${word.word}`;
    const sgvId = `svgAmoutWord${wordNum}`;
    document.getElementById(sgvId)?.classList.remove('tablCallGray');
    document.getElementById(sgvId)?.classList.add('tablCallRight');
    document.getElementById(`${idRightWord}`)?.classList.add('right-answer-call');
    ChangeViewAnswerSong(true);
    openOneChoise = false;
  }

  function SelectWordsInExercise() {
    // console.log(22);
    ChangeViewAnswerSong(false);
    setWordNum(wordNum + 1);
    console.log(wordNum);
  }

  function choiseWordCall(event: SyntheticEvent) {
    const rightWord = word.wordTranslate;
    const idRightWord = `call${word.word}`;
    const { innerHTML, classList, id } = event.target as HTMLElement;
    const sgvId = `svgAmoutWord${wordNum}`;
    // svgAmoutWord0
    if (openOneChoise && !classList.contains('wrapper-word-call') && innerHTML.slice(1) === rightWord) {
      document.getElementById(`${id}`)?.classList.add('right-answer-call');
      document.getElementById(sgvId)?.classList.remove('tablCallGray');
      document.getElementById(sgvId)?.classList.add('tablCallRight');
      ChangeViewAnswerSong(true);
      openOneChoise = false;
    } else if (openOneChoise && !classList.contains('wrapper-word-call')) {
      document.getElementById(`${id}`)?.classList.add('lose-answer-call');
      document.getElementById(`${idRightWord}`)?.classList.add('right-answer-call');
      document.getElementById(sgvId)?.classList.remove('tablCallGray');
      document.getElementById(sgvId)?.classList.add('tablCallWrong');
      ChangeViewAnswerSong(true);
      openOneChoise = false;
    }
  }

  // по нажатию на клавиши
  function choiseWordCallKeyboard(event: KeyboardEvent) {
    const rightWord = word.wordTranslate;
    const idRightWord = `call${word.word}`;
    const sgvId = `svgAmoutWord${wordNum}`;
    for (let i = 0; i < 5; i += 1) {
      if (+event.key === i && openOneChoise) {
        const { innerHTML, id } = document.querySelector(`.call${+event.key}`) as HTMLElement;
        if (openOneChoise && innerHTML.slice(1) === rightWord) {
          document.getElementById(`${id}`)?.classList.add('right-answer-call');
          document.getElementById(sgvId)?.classList.remove('tablCallGray');
          document.getElementById(sgvId)?.classList.add('tablCallRight');
          ChangeViewAnswerSong(true);
          openOneChoise = false;
        } else if (openOneChoise) {
          document.getElementById(`${id}`)?.classList.add('lose-answer-call');
          document.getElementById(`${idRightWord}`)?.classList.add('right-answer-call');
          document.getElementById(sgvId)?.classList.remove('tablCallGray');
          document.getElementById(sgvId)?.classList.add('tablCallWrong');
          ChangeViewAnswerSong(true);
          openOneChoise = false;
        }
      }
    }
  }

  // по нажатии на клавиатуру
  useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => choiseWordCallKeyboard(e);
    document.addEventListener('keypress', (e) => onKeypress(e));

    return () => {
      document.removeEventListener('keypress', (e) => (e));
    };
  }, [wordNum]);

  return (
    <>
      <div
        role="presentation"
        className="wrapper-words-choise-call"
        onClick={(e) => choiseWordCall(e)}
      >
        {fiveWords.map((wordWrite, i) => (
          <WordsSupportCall
            wordWrite={wordWrite}
            i={i}
            key={wordWrite.wordTranslate}
          />
        ))}
      </div>
      <div className="next-word-call">
        <button
          type="button"
          className="next-words-wrapper"
        >
          <div className="dont-button-call-word" id="dont-know-call-button" onClick={() => choiseDontKnowButtonCall()}> Не знаю </div>
          <svg className="next-button-call-word call-hidden" onClick={() => SelectWordsInExercise()} id="next-button-call-word" focusable="false" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z" /></svg>
        </button>
      </div>
    </>
  );
}

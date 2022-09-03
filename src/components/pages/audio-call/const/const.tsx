import { RestartGameAudiocallProp } from '../interfaces/interfaces';

export const SvgSongCall = (
  <svg className="sound-icon-big-call" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);
export const SvgSongCallAnswer = (
  <svg className="sound-icon-big-call-answer" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);
export const adress = 'https://react-rslang-back-app.herokuapp.com/';
export const wordsPage = (group: number, page: number) => `${adress}words?group=${group}&page=${page}`;
export const svgAmoutWord0 = (
  <svg className="tablCallGray" id="svgAmoutWord0" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord1 = (
  <svg className="tablCallGray" id="svgAmoutWord1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord2 = (
  <svg className="tablCallGray" id="svgAmoutWord2" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord3 = (
  <svg className="tablCallGray" id="svgAmoutWord3" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord4 = (
  <svg className="tablCallGray" id="svgAmoutWord4" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord5 = (
  <svg className="tablCallGray" id="svgAmoutWord5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord6 = (
  <svg className="tablCallGray" id="svgAmoutWord6" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord7 = (
  <svg className="tablCallGray" id="svgAmoutWord7" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord8 = (
  <svg className="tablCallGray" id="svgAmoutWord8" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const svgAmoutWord9 = (
  <svg className="tablCallGray" id="svgAmoutWord9" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
);

export const paramsToRestartAudiocallGame: RestartGameAudiocallProp = {
  setCurGroup: () => 0,
  setLoading: () => 0,
  setWordNum: () => 0,
  setBestSeria: () => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

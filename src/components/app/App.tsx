import { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { validToken } from '../global-components/authorization/utils/utils';

import GameLayout from '../global-components/game-layout/game-layout';
import MainLayout from '../global-components/main-layout/main-layout';
import About from '../pages/about/about';
import AudioCall from '../pages/audio-call/audio-call';
import Error from '../pages/error/Error';
import Games from '../pages/games/games';
import Main from '../pages/main/main';
import Sprint from '../pages/sprint/sprint';
import Statistics from '../pages/statistics/statistics';
import AllCards from '../pages/tutorial/cards/allCards';
import TutorialContent from '../pages/tutorial/tutorial';
import { TAuthorizedCtx, TAudioPlay } from '../pages/tutorial/types';

export const AuthorizedCtx = createContext([] as unknown as TAuthorizedCtx);
export const ThemeCtx = createContext([] as unknown as TAuthorizedCtx);
export const AudioPlayCtx = createContext([] as unknown as TAudioPlay);
export const audioEl = new Audio();

export default function App() {
  const authorizedInitCtx = useState(validToken());
  const audioPlayInitCtx = useState('');
  const themeInitCtx = useState(true);

  return (
    <AuthorizedCtx.Provider value={authorizedInitCtx}>
      <AudioPlayCtx.Provider value={audioPlayInitCtx}>
        <ThemeCtx.Provider value={themeInitCtx}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="games" element={<Games />} />
              <Route path="about" element={<About />} />
              <Route path="glossary/:group/:page" element={<TutorialContent />}>
                <Route index element={<AllCards />} />
              </Route>
              <Route path="glossary/*" element={<Navigate to="1/1" replace />} />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="games" element={<GameLayout />}>
              <Route path="audio-call" element={<AudioCall />} />
              <Route path="sprint" element={<Sprint />} />
            </Route>
          </Routes>
        </ThemeCtx.Provider>
      </AudioPlayCtx.Provider>
    </AuthorizedCtx.Provider>
  );
}

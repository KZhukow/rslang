import { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../global-components/main-layout/main-layout';
import About from '../pages/about/about';
import Error from '../pages/error/Error';
import Games from '../pages/games/games';
import Main from '../pages/main/main';
import Statistics from '../pages/statistics/statistics';
import AllCards from '../pages/tutorial/cards/allCards';
import TutorialContent from '../pages/tutorial/tutorial';
import { TAuthorizedCtx, TAudioPlay } from '../pages/tutorial/types';

export const AuthorizedCtx = createContext([] as unknown as TAuthorizedCtx);
export const AudioPlayCtx = createContext([] as unknown as TAudioPlay);
export const audioEl = new Audio();

export default function App() {
  const authorizedInitCtx = useState(true);
  const audioPlayInitCtx = useState('');

  return (
    <AuthorizedCtx.Provider value={authorizedInitCtx}>
      <AudioPlayCtx.Provider value={audioPlayInitCtx}>
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
          <Route path="games" element={<h1>Game general content</h1>}>
            <Route path="game1" element={<h2>Game1 content</h2>} />
            <Route path="game2" element={<h2>Game2 content</h2>} />
          </Route>
        </Routes>
      </AudioPlayCtx.Provider>
    </AuthorizedCtx.Provider>
  );
}

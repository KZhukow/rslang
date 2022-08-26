import React, { useState, createContext } from 'react';
import AppStatistics from '../pages/statistics/AppStatistics';

export type TAuthorizedCtx = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const AuthotizedCtx = createContext([] as unknown as TAuthorizedCtx);

function App() {
  const authotizedInitCtx = useState(true);
  return (
    <AuthotizedCtx.Provider value={authotizedInitCtx}>
      <AppStatistics />
    </AuthotizedCtx.Provider>
  );
}
export default App;

import { useState } from 'react';

import { ReactComponent as Devil } from '../image/devil.svg';
import { ReactComponent as Star } from '../image/star.svg';

import { IUserWordInfo, ModifierBtnsProp } from '../types';
import { createUserWord, updateUserWord } from '../../sprint/fetch';
import { updateUserStatistic } from '../../statistics/fetch/getOptionsUser';

export default function ModifierBtns({ userWord, id, setUserWordState }: ModifierBtnsProp) {
  const [star, setStar] = useState(userWord?.difficulty === 'study');
  const starModifier = star ? 'star-active' : 'star-not-active';
  const [devil, setDevil] = useState(userWord?.difficulty === 'hard');
  const devilModifier = devil ? 'devil-active' : 'devil-not-active';
  const [loading, setLoading] = useState(false);
  const [userWordSt, setUserWordSt] = useState(userWord);

  async function clickStartBtn() {
    setLoading(true);
    setStar((state) => !state);
    if (devil) setDevil((state) => !state);
    if (userWordSt) {
      await updateUserWord(userWordSt as IUserWordInfo, true, !star);
      await updateUserStatistic(false, !star ? 1 : -1);
    } else {
      const userWordOption = await createUserWord(id, true);
      await updateUserStatistic(true, 1);
      setUserWordSt(userWordOption);
      setUserWordState(userWordOption);
    }
    setLoading(false);
  }

  async function clickDevilBtn() {
    setLoading(true);
    setDevil((state) => !state);
    if (star) setStar((state) => !state);
    if (userWordSt) {
      await updateUserWord(userWordSt as IUserWordInfo, false, !devil);
      await updateUserStatistic(false, star ? -1 : 0);
    } else {
      const userWordOption = await createUserWord(id, false);
      await updateUserStatistic(true, 0);
      setUserWordSt(userWordOption);
      setUserWordState(userWordOption);
    }
    setLoading(false);
  }

  return (
    <div className="modifier">
      <div className="blur-block" />
      {loading && (<div className="modify-btn-loader" />)}
      <button type="button" onClick={clickStartBtn} className={starModifier}>
        <Star />
      </button>
      <button type="button" onClick={clickDevilBtn}>
        <Devil className={devilModifier} />
      </button>
    </div>
  );
}

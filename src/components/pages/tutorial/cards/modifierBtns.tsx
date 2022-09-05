import { useState } from 'react';

import { ReactComponent as Devil } from '../image/devil.svg';
import { ReactComponent as Star } from '../image/star.svg';

import { IUserWordInfo, ModifierBtnsProp } from '../types';
import { createUserWord, updateUserWord } from '../../sprint/fetch';

export default function ModifierBtns({ userWord, id }: ModifierBtnsProp) {
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
      // await updateUserStatistic(true, true); первое true - новые слова, второе - изучено или нет
    } else {
      const userWordOption = await createUserWord(id, true);
      setUserWordSt(userWordOption);
    }
    setLoading(false);
  }

  async function clickDevilBtn() {
    setLoading(true);
    setDevil((state) => !state);
    if (star) setStar((state) => !state);
    if (userWordSt) {
      await updateUserWord(userWordSt as IUserWordInfo, false, !devil);
    } else {
      const userWordOption = await createUserWord(id, false);
      setUserWordSt(userWordOption);
    }
    setLoading(false);
  }

  return (
    <div className="modifier">
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

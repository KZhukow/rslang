import { useContext, useState } from 'react';

import { ReactComponent as Devil } from '../image/devil.svg';
import { ReactComponent as Star } from '../image/star.svg';

import { AuthorizedCtx } from '../../../app/App';

export default function ModifierBtns() {
  const [star, setStar] = useState(false);
  const starModifier = star ? 'star-active' : 'star-not-active';
  const [devil, setDevil] = useState(false);
  const devilModifier = devil ? 'devil-active' : 'devil-not-active';

  const [authorized] = useContext(AuthorizedCtx);

  return authorized ? (
    <div className="modifier">
      <button type="button" onClick={() => setStar((state) => !state)} className={starModifier}>
        <Star />
      </button>
      <button type="button" onClick={() => setDevil((state) => !state)}>
        <Devil className={devilModifier} />
      </button>
    </div>
  ) : (
    <div />
  );
}

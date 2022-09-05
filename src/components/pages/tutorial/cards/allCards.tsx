import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPaginatedResults, ITutorialParams, IWord } from '../types';
import Card from './card';
import { ReactComponent as Spinner } from '../image/spinner.svg';
import { getAggregatedWords, getPageWords } from '../../sprint/fetch';
import { AuthorizedCtx } from '../../../app/App';

export default function AllCards() {
  const [authorized] = useContext(AuthorizedCtx);
  const [wordsInfo, setWordsInfo] = useState<IPaginatedResults[] | IWord[]>([]);
  const [loading, setLoading] = useState(false);
  const { group, page } = useParams() as unknown as ITutorialParams;
  const curGroup = +group - 1;
  const curPage = +page - 1;

  const navigate = useNavigate();

  async function fetchWords(): Promise<void> {
    if (curGroup >= 0 && curGroup < 6 && curPage >= 0 && curPage < 30) {
      if (Number.isInteger(curGroup) && Number.isInteger(curPage)) {
        setLoading(true);
        if (authorized) {
          const aggregatedWords = await getAggregatedWords(curGroup, curPage);
          setWordsInfo(aggregatedWords);
        } else {
          const words = await getPageWords(curGroup, curPage);
          setWordsInfo(words);
        }
        setLoading(false);
      } else {
        navigate(`../../glossary/${Math.floor(curGroup) + 1}/${Math.floor(curPage) + 1}`);
      }
    } else if (curGroup >= 0 && curGroup < 6) {
      navigate(`../../glossary/${Math.floor(curGroup) + 1}/1`);
    } else if (curPage >= 0 && curPage < 30) {
      navigate(`../../glossary/1/${Math.floor(curPage) + 1}`);
    } else {
      navigate('../../glossary/1/1');
    }
  }

  useEffect(() => {
    fetchWords();
  }, [group, page, authorized]);

  return (
    <>
      {loading && <div className="spinner"><Spinner /></div>}
      <div className="cards">
        { wordsInfo.map((word) => (
          <Card
            word={word}
            key={(word as IPaginatedResults)._id || (word as IWord).id}
          />
        )) }
      </div>
    </>
  );
}

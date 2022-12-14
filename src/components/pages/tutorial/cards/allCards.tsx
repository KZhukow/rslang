import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPaginatedResults, ITutorialParams, IWord } from '../types';
import Card from './card';
import { ReactComponent as Spinner } from '../image/spinner.svg';
import { getAggregatedWords, getDifficultWords, getPageWords } from '../../sprint/fetch';
import { AuthorizedCtx } from '../../../app/App';
import { viewButtonLogin } from '../../../global-components/authorization/utils/utils';

export default function AllCards() {
  const [authorized] = useContext(AuthorizedCtx);
  const [wordsInfo, setWordsInfo] = useState<IPaginatedResults[] | IWord[]>([]);
  const [loading, setLoading] = useState(false);
  const { group, page } = useParams() as unknown as ITutorialParams;
  const curGroup = +group - 1;
  const curPage = +page - 1;

  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);

  async function fetchWords(): Promise<void> {
    if (curGroup === 6 && curPage === 0 && authorized) {
      setLoading(true);
      const difficultWords = await getDifficultWords();
      if (difficultWords.length) {
        setWordsInfo(difficultWords);
        setCounter(difficultWords.length);
      } else {
        navigate('../../glossary/1/1');
      }
      setLoading(false);
    } else if (curGroup >= 0 && curGroup < 6 && curPage >= 0 && curPage < 30) {
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

  useEffect(() => {
    if (!counter) {
      navigate('../../glossary/1/1');
    }
  }, [counter]);

  useEffect(() => {
    viewButtonLogin(authorized);
  }, []);

  return (
    <>
      {loading && <div className="spinner"><Spinner /></div>}
      <div className="cards">
        { wordsInfo.map((word) => (
          <Card
            word={word}
            key={(word as IPaginatedResults)._id || (word as IWord).id}
            setCounter={setCounter}
          />
        )) }
      </div>
    </>
  );
}

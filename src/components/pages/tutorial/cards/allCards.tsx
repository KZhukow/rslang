import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { wordsPage } from '../const';
import { IWord } from '../types';
import Card from './card';
import { ReactComponent as Spinner } from '../image/spinner.svg';

interface ITutorialParams {
  group: string,
  page: string,
}
export default function AllCards() {
  const [wordsInfo, setWordsInfo] = useState<IWord[]>([]);
  const [loading, setLoading] = useState(false);
  const { group, page } = useParams() as unknown as ITutorialParams;
  const curGroup = +group - 1;
  const curPage = +page - 1;

  async function fetchWords(): Promise<void> {
    setLoading(true);
    const response = await fetch(wordsPage(curGroup, curPage));
    setWordsInfo(await response.json());
    setLoading(false);
  }

  useEffect(() => {
    fetchWords();
  }, [group, page]);

  return (
    <>
      {loading && <div className="spinner"><Spinner /></div>}
      <div className="cards">
        { wordsInfo.map((word) => (
          <Card
            word={word}
            key={word.id}
          />
        )) }
      </div>
    </>
  );
}

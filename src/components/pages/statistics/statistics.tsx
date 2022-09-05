/* eslint-disable max-len */
import './mainStatistics.css';
import ViewAuthorize from './render/ViewContent';
import ViewNotAuthorize from './render/notAuthorize';
import getStatistics from './fetch/getStatistics';
import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';
import { upsertStatiscticGame } from './fetch/getOptionsUser';

export default function Statistics() {
  const { loading, statisticsOfUser, authrize } = getStatistics();
  if (authrize) upsertStatiscticGame();
  return authrize ? (
    <>
      {loading && <div className="spinner"><Spinner /></div>}
      {statisticsOfUser && <ViewAuthorize statisticsOfUser={statisticsOfUser} />}
      {' '}
    </>
  ) : (
    <>
      {' '}
      <ViewNotAuthorize />
    </>
  );
}

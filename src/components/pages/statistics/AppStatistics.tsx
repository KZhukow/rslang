import Authorize from './render/Authorize';
import getStatistics from './servises/statistics';
import NotAuthorize from './render/notAuthorize';

export default function AppStatistics() {
  // getDataUser();
  // upsertStatistics();
  const statisticsOfUser = getStatistics();
  // если authorize - true - тогда видим основной контент;
  const authrize = localStorage.getItem('userData');
  // eslint-disable-next-line no-console
  return (
    <>
      {statisticsOfUser && <Authorize statisticsOfUser={statisticsOfUser} />}
      {' '}
      {!authrize && <NotAuthorize />}
    </>
  );
}

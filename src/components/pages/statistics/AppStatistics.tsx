import Authorize from './render/Authorize';
import { getStatistics } from './servises/statistics';
import NotAuthorize from './render/notAuthorize copy';

export default function AppStatistics() {
  const statisticsOfUser = getStatistics();
  const authrize = localStorage.getItem('userData');
  // getDataUser();
  // upsertStatistics();
  // eslint-disable-next-line no-console
  return (
    <div className="wrapper">
      <header className="header" />
      {statisticsOfUser && <Authorize statisticsOfUser={statisticsOfUser} />}
      {' '}
      {!authrize && <NotAuthorize />}
      <footer className="footer" />
    </div>
  );
}

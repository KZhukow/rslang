import Authorize from './render/Authorize';
import { getDataUser, getStatistics, upsertStatistics } from './servises/statistics';
import NotAuthorize from './render/notAuthorize';

export default function AppStatistics() {
  getDataUser();
  upsertStatistics();
  getDataUser();
  const statisticsOfUser = getStatistics();
  const authrize = localStorage.getItem('userData');
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

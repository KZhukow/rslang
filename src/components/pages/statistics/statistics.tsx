import './mainStatistics.css';
import { useContext, useState } from 'react';
import ViewAuthorize from './render/ViewContent';
import ViewNotAuthorize from './render/notAuthorize';
import { AuthorizedCtx } from '../../app/App';
import getStatistics from './fetch/getStatistics';
import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';
import { viewButtonLogin } from '../../global-components/authorization/utils/utils';

export default function Statistics() {
  const [authrize] = useContext(AuthorizedCtx);
  viewButtonLogin(authrize);

  const [loading, setLoading] = useState(false);
  const statisticsOfUser = getStatistics(setLoading);
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

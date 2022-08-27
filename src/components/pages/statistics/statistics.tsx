/* eslint-disable max-len */
/* eslint-disable quote-props */
import './mainStatistics.css';
import { useContext, useState } from 'react';
import ViewAuthorize from './render/ViewContent';
import ViewNotAuthorize from './render/notAuthorize';
import { AuthorizedCtx } from '../../app/App';
import getStatistics from './fetch/getStatistics';
import authorizeUser from './fetch/authorizeUser';

import { ReactComponent as Spinner } from '../tutorial/image/spinner.svg';

export default function Statistics() {
  const [authrize] = useContext(AuthorizedCtx);
  /// блок не моего кода
  const user = {
    'name': 'Denis',
    'email': 'denissadasdasd@mail.ru',
    'password': '222222222',
  };
  // 1 новый пользователь Регистрация - createNewUser(user); - authorizeUser(user) - upsertStatistics();
  // 2 Авторизация - authorizeUser(user);
  // createNewUser(user);
  authorizeUser(user);
  // upsertStatistics();
  /// блок не моего кода
  const [loading, setLoading] = useState(false);
  const statisticsOfUser = getStatistics(setLoading);
  // если authorize - true - тогда видим основной контент;
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-console
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

/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useContext } from 'react';
import ViewAuthorize from './render/ViewContent';
import ViewNotAuthorize from './render/notAuthorize';
import { AuthotizedCtx } from '../../app/App';
import getStatistics from './fetch/getStatistics';
import authorizeUser from './fetch/authorizeUser';

export default function AppStatistics() {
  const [authrize] = useContext(AuthotizedCtx);
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
  const statisticsOfUser = getStatistics();
  // если authorize - true - тогда видим основной контент;
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-console
  return authrize ? (
    <>
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

/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { SIGNIN } from '../const/const';
import { ISignin, IUser } from '../interfaces/interfaces';

export default function authorizeUser(takeUserData: IUser) {
  // c именем регистрация вход без;
  // eslint-disable-next-line no-shadow
  const [dataUser, setDataUser] = useState<ISignin>();
  async function getData() {
    const response = await fetch(SIGNIN, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(takeUserData),
    });
    setDataUser(await response.json());
  }
  useEffect(() => {
    getData();
  }, []);

  if (dataUser) {
    localStorage.setItem('userData', JSON.stringify(dataUser));
  }
  return { dataUser };
}

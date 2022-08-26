/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from 'react';
import { USERS } from '../const/const';
import { IUser } from '../interfaces/interfaces';

export default function createNewUser(takeUserData: IUser): void {
  async function getData() {
    await fetch(USERS, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(takeUserData),
    });
  }
  useEffect(() => {
    getData();
  }, []);
}

import React from 'react';

export function viewButtonLogin(authrize: boolean) {
  if (authrize) {
    document.getElementById('btn_login')?.classList.add('hidden');
    document.getElementById('btn_logout')?.classList.remove('hidden');
  } else {
    document.getElementById('btn_logout')?.classList.add('hidden');
    document.getElementById('btn_login')?.classList.remove('hidden');
  }
}

export function popupOpen(authrize: boolean) {
  document.getElementById('openModal')?.classList.remove('hidden');
  viewButtonLogin(authrize);
}

export function popupClose() {
  document.getElementById('openModal')?.classList.add('hidden');
}
export function exitPage(setAuthrize: React.Dispatch<React.SetStateAction<boolean>>) {
  localStorage.clear();
  setAuthrize(false);
  viewButtonLogin(false);
}

export function loginForm() {
  document.getElementById('login_form')?.classList.add('active');
  document.getElementById('registration_form')?.classList.remove('active');
  document.querySelectorAll('.login')?.forEach((item) => {
    item.classList.remove('hidden');
  });
  document.querySelectorAll('.registration')?.forEach((item) => {
    item.classList.add('hidden');
  });
}

export function registrationForm() {
  document.getElementById('registration_form')?.classList.add('active');
  document.getElementById('login_form')?.classList.remove('active');
  document.querySelectorAll('.registration')?.forEach((item) => {
    item.classList.remove('hidden');
  });
  document.querySelectorAll('.login')?.forEach((item) => {
    item.classList.add('hidden');
  });
}

export function closeDivError(divError: HTMLElement | null) {
  const Modal = document.getElementById('openModal');
  divError?.classList.remove('hidden');
  Modal?.addEventListener('mouseup', () => {
    divError?.classList.add('hidden');
  });
}

export function validToken() {
  const nowTime = new Date();
  const fourHourMs = 14400000;
  const timeToken = localStorage.getItem('timeToken');
  if (timeToken) {
    if ((nowTime.getTime() - JSON.parse(timeToken)) > fourHourMs) {
      localStorage.clear();
      return false;
    }
    return true;
  }
  return false;
}

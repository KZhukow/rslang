import React from 'react';
import './themeToggle.css';
import { BiSun, BiMoon } from 'react-icons/bi';

export default function ThemeToggle() {
  function themeMode() {
    document.querySelector('.light')!.classList.toggle('hidden');
    document.querySelector('.dark')!.classList.toggle('hidden');
    document.querySelectorAll('header')!.forEach((item) => {
      item.classList.toggle('dark_header');
    });
    document.querySelectorAll('body')!.forEach((item) => {
      item.classList.toggle('dark_body');
    });
    document.querySelectorAll('footer')!.forEach((item) => {
      item.classList.toggle('dark_footer');
    });
    document.querySelector('.modal_popup')!.classList.toggle('dark_modal_popup');
    if (document.querySelector('.gap')) {
      if (document.querySelector('.dark_gap')) {
        document.querySelector('.gap')!.classList.remove('dark_gap');
      } else {
        document.querySelector('.gap')!.classList.add('dark_gap');
      }
    }
    document.querySelectorAll('.nav_link')!.forEach((item) => {
      item.classList.toggle('dark_nav');
    });
    document.querySelectorAll('.form_btn')!.forEach((item) => {
      item.classList.toggle('dark_form_btn');
    });
  }

  return (
    <button type="button" className="themeToggle" onClick={themeMode}>
      <BiSun className="theme_btn light" />
      <BiMoon className="theme_btn dark hidden" />
    </button>
  );
}

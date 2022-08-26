import React from 'react';
import logo from '../../../assets/images/logo.png';
import Authorization from '../authorization/Authorization';

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <a className="logo_link" href="/home">
            <img className="logo_img" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="header_nav">
          <li className="nav_item">
            <a className="nav_link" href="/#">home</a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="/#/about">about</a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="/#/glossary">glossary</a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="/#/games">games</a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="/#/statistics">statistics</a>
          </li>
        </div>
        <Authorization />
      </div>
    </header>
  );
}

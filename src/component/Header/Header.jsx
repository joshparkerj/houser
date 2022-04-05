import React from 'react';
import './Header.css';
import logo from '../../assets/houser_logo.webp';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="houser" />
      <h1 className="page-title">Houser</h1>
    </div>
  );
}

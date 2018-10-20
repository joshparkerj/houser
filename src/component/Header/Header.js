import React from 'react';
import './Header.css';
import logo from '../../assets/houser_logo.png';

export default function Header(props){
  return (
    <div className="header">
      <img src={logo} alt="houser" />
      <h1 className="page-title">Houser</h1>
    </div>
  )
}
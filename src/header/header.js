import React, { Component } from 'react';
import logo from '../images/icons8-evil.png';

const TITLE = "Welcome to Raul's Book Storage";

const Header = (props) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{TITLE}</h2>
    </div>
  )
}

export default Header;

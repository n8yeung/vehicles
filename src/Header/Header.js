import React, { Component } from 'react';
import './Header.css';
import logoMake from '../assets/images/logo-make.png';

class Header extends Component {

  render() {
    return (
        <div className="header-container">
          <img alt="Honda" className="logo" src={logoMake} />
          <h1 className="heading">Honda Vehicles</h1>
        </div>
    );
  }
}

export default Header;

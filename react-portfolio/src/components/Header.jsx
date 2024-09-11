import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <img src="./assets/images/MOAT.jpg" id="logo" alt="Logo" />
          <h3>MAC of All Trades</h3>
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__container">
        <img
          className="header__logo"
          src="/images/main-logo.svg" 
          alt="Cyberpunk Logo"
        />
        <div className="header__icons">
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-youtube"></use>
          </svg>
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-vk"></use>
          </svg>
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-facebook"></use>
          </svg>
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-twitter"></use>
          </svg>
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-twitch"></use>
          </svg>
          <svg width="30" height="30">
            <use href="/images/icons.svg#icon-instagram"></use>
          </svg>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

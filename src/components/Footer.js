import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__container">
        <p className="footer__copyright">
          <span>© All rights reserved,</span> CYBERPUNK 2077
        </p>
        <div className="footer__icons">
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
  </footer>
);

export default Footer;

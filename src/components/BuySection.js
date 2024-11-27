import React from 'react';

const BuySection = () => (
  <section className="buy-section">
    <div className="container">
      <div className="buy-section__whole-content">
        <img
          className="buy-section__photo"
          src="/images/disks.jpg"
          alt="Disks"
        />
        <div className="buy-section__container">
          <h2 className="buy-section__title">Buy Cyberpunk 2077</h2>
          <h3 className="buy-section__accent-title">Includes:</h3>
          <ul className="buy-section__list">
            <li className="buy-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-cd"></use>
              </svg>
              <p>Game installation disk</p>
            </li>
            <li className="buy-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-map"></use>
              </svg>
              <p>Map of Night City</p>
            </li>
            <li className="buy-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-sticker"></use>
              </svg>
              <p>Stickers and postcards</p>
            </li>
            <li className="buy-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-book"></use>
              </svg>
              <p>World Compendium</p>
            </li>
          </ul>
          <button className="button" type="button">Learn More</button>
        </div>
      </div>
    </div>
  </section>
);

export default BuySection;

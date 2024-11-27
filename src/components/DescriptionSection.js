import React from 'react';

const DescriptionSection = () => (
  <section className="description-section">
    <div className="container">
      <img src="/images/black-yellow.png" alt="line" />
      <div className="description-section__container">
        <div className="description-section__photo-container">
          <img
            className="description-section__computer-photo"
            src="/images/computer.svg"
            alt="computer"
          />
          <div className="description-section__logos">
            <svg width="44" height="44">
              <use href="/images/icons.svg#icon-hp"></use>
            </svg>
            <img src="/images/cross.svg" alt="cross" />
            <img
              className="description-section__main-logo"
              src="/images/main-logo.svg"
              alt="Cyberpunk Logo"
            />
          </div>
        </div>
        <div className="description-section__text-container">
          <h2 className="description-section__title">Total immersion with HP</h2>
          <p className="description-section__text">
            Immerse yourself in modern action games with realistic visuals,
            using a 23.8-inch monitor designed for rich color displays. React
            quickly to events with a 1ms response time and 144Hz refresh rate!
          </p>
          <div className="description-section__list">
            <li className="description-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-palette"></use>
              </svg>
              <p>Bright, rich colors</p>
            </li>
            <li className="description-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-stars"></use>
              </svg>
              <p>Crystal clear image</p>
            </li>
            <li className="description-section__item">
              <svg width="24" height="24">
                <use href="/images/icons.svg#icon-files"></use>
              </svg>
              <p>Fast movements and smooth gameplay</p>
            </li>
          </div>
          <button className="button" type="button">Learn More</button>
        </div>
      </div>
    </div>
  </section>
);

export default DescriptionSection;

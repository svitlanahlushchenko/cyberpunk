import React from 'react';

const InfoSection = () => (
  <section className="info-section">
    <div className="container">
      <div className="info-section__container">
        <div className="info-section__text-container">
          <h2 className="info-section__title">
            Night City will change you forever!
          </h2>
          <p className="info-section__text">
            <span className="accent">Cyberpunk 2077</span> is an adventure RPG set
            in the metropolis of Night City, where power, luxury, and body
            modification are valued above all. You play as V, a mercenary on
            the hunt for a device that grants immortality. You can customize
            your character's cyber-implants, skills, and playstyle as you
            explore an open world where your actions shape the storyline and
            everything around you.
          </p>
        </div>
        <div className="info-section__photo-container">
          <div className="info-section__row-photo">
            <img
              className="info-section__photo"
              src="/images/info-city.png" 
              alt="Night City"
            />
            <img
              className="info-section__photo"
              src="/images/info-moto.png" 
              alt="Motorcycle"
            />
          </div>
          <img
            className="info-section__photo"
            src="/images/info-buildings.png" 
            alt="Night City buildings"
          />
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;

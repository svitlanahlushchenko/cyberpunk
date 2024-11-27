import React from 'react';

const PromotionSection = () => (
  <section className="promotion-section">
    <div className="container">
      <img src="/images/white-black.png" alt="line" />
      <img
        className="promotion-section__promotion-photo"
        src="/images/promotiom.svg"
        alt="promotion"
      />
      <div className="promotion-section__container">
        <div className="promotion-section__photo-container">
          <div className="promotion-section__xbox">
            <img
              className="promotion-section__background-line"
              src="/images/yellow-line.svg"
              alt="yellow line"
            />
            <img
              className="promotion-section__main-photo"
              src="/images/xbox.svg"
              alt="Xbox"
            />
          </div>
          <div className="promotion-section__ps4">
            <img
              className="promotion-section__background-line"
              src="/images/blue-line.svg"
              alt="blue line"
            />
            <img
              className="promotion-section__main-photo"
              src="/images/playstation.svg"
              alt="PlayStation"
            />
          </div>
        </div>
        <div className="promotion-section__info">
          <div className="promotion-section__text-container">
            <h2 className="promotion-section__text-container-title">
              Play and Win!
            </h2>
            <p className="promotion-section__text">
              Play <span className="accent">Cyberpunk 2077</span> and get a chance
              to win an <span className="accent">Xbox Series X</span> or
              <span className="accent">Sony PlayStation 5</span> console! Fill out
              the form below and attach a screenshot of your game purchase.
              The draw results will be announced on February 1. Good luck!
            </p>
          </div>
          <div className="promotion-section__contact">
            <form
              className="promotion-section__contact-form"
              name="contact-form"
              autoComplete="on"
              noValidate
            >
              <input
                className="promotion-section__form-input"
                type="text"
                id="name"
                name="name"
                required
                placeholder="What's your name?"
              />
              <input
                className="promotion-section__form-input"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email"
              />

              <div className="promotion-section__form-screenshot">
                <input
                  className="promotion-section__form-screenshot-input"
                  type="file"
                  id="screenshot"
                  name="screenshot"
                  accept="image/*"
                  required
                />
                <label
                  className="promotion-section__form-screenshot-label"
                  htmlFor="screenshot"
                >
                  Attach Screenshot
                </label>
              </div>
              <button className="button-reverse-color" type="submit">
                Submit
              </button>
              <div className="promotion-section__checkbox-container">
                <label>
                  <input
                    className="real-checkbox"
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    required
                  />
                  <span className="custom-checkbox"></span> I agree to the
                  processing of personal data
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromotionSection;

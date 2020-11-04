import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './homepage.scss';

// import images ressources
import mountain from 'src/assets/images/thumbnail-top.png';
import lake from 'src/assets/images/thumbnail-bottom.png';
import mapIcon from 'src/assets/images/schedule.png';
import gpsIcon from 'src/assets/images/gps.png';
import luggageIcon from 'src/assets/images/luggage.png';

const Homepage = ({ user }) => {
  const animations = () => {
    const title = document.querySelector('.title');
    const mountainThmb = document.querySelector('.mountain');
    const header = document.querySelector('.container');
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
      const value = window.scrollY;
      const scroll = window.pageYOffset;
      const headerHeight = header.offsetHeight;

      mountainThmb.style.transform = `translateY(${value * 0.2}px)`;
      navbar.style.transform = `translateY(${value * 0.2}px)`;

      title.style.transform = `translateY(${value * 0.3}px)`;
      title.style.opacity = (-scroll / (headerHeight / 2)) + 1;
    });
  };

  useEffect(() => {
    animations();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="background">
          <img src={mountain} alt="mountain" className="mountain bg" />
          <img src={lake} alt="lake" className="lake bg" />
        </div>

        <div className="title">GlobeTrotter</div>
        <Link to={user.id ? '/creer-un-voyage' : '/inscription'}><button type="button" className="create">Planifier un voyage</button></Link>

      </div>

      <div className="homepage-description">

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={mapIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Facile à prendre en main</h1>
              <p>Choisissez la destination de vos rêves</p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={gpsIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Facile à prendre en main</h1>
              <p>Séléctionner les lieux à visiter et retrouver les depuis n'importe où sur la carte interactive</p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={luggageIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Facile à prendre en main</h1>
              <p>Faites votre valise, tout est prêt !</p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={luggageIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Facile à prendre en main</h1>
              <p>Blablabla !</p>
            </div>
          </div>
        </section>
      </div>
    </div >
  );
};

Homepage.propTypes = {
  user: PropTypes.object,
};
Homepage.defaultProps = {
  user: null,
};

export default Homepage;

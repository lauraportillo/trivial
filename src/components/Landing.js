// React
import { Link } from 'react-router-dom';
// Components
import Footer from './Footer';
// Styles
import styled from 'styled-components';
// Images
import icon from '../images/button-white.png';

const Landing = () => {
  return (
    <div className="containerHome">
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">trivial!</h1>

        <button className="home__btn">
          <Link to="/instructionsEn">
            <img className="home__btn--img" src={icon} alt="start button" />
          </Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;

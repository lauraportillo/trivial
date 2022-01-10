// React
import { Link } from 'react-router-dom';
// Components
import Footer from './Footer';
// Styles
import styled from 'styled-components';
// Images
import icon from '../images/button-white.png';

const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Landing = () => {
  return (
    <Container>
      <main className="home">
        <div className="home__image"></div>
        <h1 className="home__title">trivial</h1>
        <h2>🎲 Welcome to my react.js trivial number quiz!</h2>

        <button className="home__btn">
          <Link to="/instructionsEn">
            <img className="home__btn--img" src={icon} alt="start button" />
          </Link>
        </button>
      </main>
      <Footer />
    </Container>
  );
};

export default Landing;

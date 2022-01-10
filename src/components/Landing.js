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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Nixie One', cursive;
  font-size: 30px;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red, 0 0 82px red, 0 0 92px red, 0 0 102px red,
    0 0 151px red;
`;

const Subtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  color: #fff;
`;

const Landing = () => {
  return (
    <Container>
      <Main>
        <Title>trivial</Title>
        <Subtitle>Welcome to my react.js trivial number quiz!</Subtitle>

        <button className="home__btn">
          <Link to="/instructionsEn">
            <img className="home__btn--img" src={icon} alt="start button" />
          </Link>
        </button>
      </Main>
      <Footer />
    </Container>
  );
};

export default Landing;

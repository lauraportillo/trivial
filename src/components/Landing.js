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
  font-size: 40px;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px green, 0 0 82px green, 0 0 92px green,
    0 0 102px green, 0 0 151px green;
`;

const Subtitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #fff;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-top: 40px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
    opacity: 0.6;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Landing = () => {
  return (
    <Container>
      <header></header>
      <Main>
        <Title>trivial</Title>
        <Subtitle>Welcome to trivial number quiz!</Subtitle>

        <Button>
          <Link to="/instructionsEn">
            <Image title="Start" src={icon} alt="start button" />
          </Link>
        </Button>
      </Main>
      <Footer />
    </Container>
  );
};

export default Landing;

// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import FooterBlack from './FooterBlack';
// Styles
import styled from 'styled-components';
// Services
import getDataFromApi from '../services/getDataFromApi';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Nixie One', cursive;
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-top: 30px;
  @media (min-width: 768px) {
    font-size: 50px;
    margin-top: 40px;
  }
`;

const Trivial = (props) => {
  //state
  const [trivialArts, setTrivialArts] = useState([]);
  //component life and promise
  useEffect(() => {
    console.log(getDataFromApi());
    getDataFromApi().then((data) => setTrivialArts(data));
  }, []);

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <main></main>
      <FooterBlack />
    </Container>
  );
};

export default Trivial;

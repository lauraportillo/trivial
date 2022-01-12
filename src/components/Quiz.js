// React
import { Data } from '../data/Data';
import { useState } from 'react';

import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Components
import FooterBlack from './FooterBlack';
// Styles
import styled from 'styled-components';

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
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Section1 = styled.section``;
// const Section2 = styled.section``;
// const Form = styled.section``;
// const Section3 = styled.section``;

const Quiz = (props) => {
  //state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <section>
          <h2> Question 1 of 10</h2>
          <h2> {Data[currentQuestion].question}</h2>

          <div>
            <button
              onClick={() => {
                chooseOption('incorrect_answers_0');
              }}
            >
              {Data[currentQuestion].incorrect_answers[0]}
            </button>
            <button
              onClick={() => {
                chooseOption('correct_answer');
              }}
            >
              {Data[currentQuestion].correct_answer}
            </button>
            <button
              onClick={() => {
                chooseOption('incorrect_answers_1');
              }}
            >
              {Data[currentQuestion].incorrect_answers[1]}
            </button>
            <button
              onClick={() => {
                chooseOption('incorrect_answers_2');
              }}
            >
              {Data[currentQuestion].incorrect_answers[2]}
            </button>
          </div>
          <button>Next Question</button>
        </section>
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default Quiz;

// React
// import { questions } from '../data/questions';
import { useState } from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Components
import Question from './Question';
import ResponsesList from './ResponsesList';
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
  font-weight: 900;
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

const Subtitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const NextButton = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  color: white;
  margin-top: 20px;
  width: 190px;
  height: 30px;
  border-radius: 10px;
  border: solid black 1px;
  background-color: black;
  text-align: center;
  outline: inherit;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: grey;
    border: solid grey 1px;
    top: 2px;
  }
`;
const FinishButton = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  color: white;
  margin-top: 20px;
  width: 190px;
  height: 30px;
  border-radius: 10px;
  border: solid black 1px;
  background-color: black;
  text-align: center;
  outline: inherit;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: grey;
    border: solid grey 1px;
    top: 2px;
  }
`;

const Quiz = () => {
  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const { questions, setGameState, score, setScore, userAnswers } = useContext(GameStateContext);

  const nextQuestion = () => {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    if (!userAnswers[currentQuestion]) {
      userAnswers[currentQuestion] = 'skipped';
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState('finished');
  };

  const counter = currentQuestion + 1;

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <Subtitle> Question {counter} of 10</Subtitle>
        <Question currentQuestion={currentQuestion} setOptionChosen={setOptionChosen} userAnswers={userAnswers} />
        {currentQuestion === questions.length - 1 ? (
          <FinishButton onClick={finishQuiz} id="finishQuiz">
            Finish Quiz
          </FinishButton>
        ) : (
          <NextButton onClick={nextQuestion} id="nextQuestion">
            Next Question
          </NextButton>
        )}
        <ResponsesList />
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default Quiz;

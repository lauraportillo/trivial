// React
import { Questions } from '../data/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Components
import Question from './Question';
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
  const { setGameState, score, setScore, currentQuestion, setCurrentQuestion, optionChosen } =
    useContext(GameStateContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].correct_answer === optionChosen) {
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
        <Question />
        {currentQuestion === Questions.length - 1 ? (
          <FinishButton onClick={finishQuiz} id="finishQuiz">
            Finish Quiz
          </FinishButton>
        ) : (
          <NextButton onClick={nextQuestion} id="nextQuestion">
            Next Question
          </NextButton>
        )}
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default Quiz;

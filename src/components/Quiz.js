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
        <h2> Question {counter} of 10</h2>
        <Question />
        {currentQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">
            Next Question
          </button>
        )}
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default Quiz;

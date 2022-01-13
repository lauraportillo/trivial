// React
import { Questions } from '../data/Questions';
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
const Subtitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
`;

const ScoreBox = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 30px;
  font-weight: 400;
  margin-top: 20px;
  color: white;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: solid black 1px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Reset = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  color: black;
  margin-top: 20px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  border: solid black 1px;
  background-color: inherit;
  text-align: center;
  outline: inherit;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    background-color: grey;
    color: white;
    top: 2px;
  }
`;

const EndScreen = () => {
  const { setGameState, score, setScore, setCurrentQuestion, setOptionChosen } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
    setCurrentQuestion(0);
    setOptionChosen('');
  };

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <Subtitle>Here is your score!</Subtitle>
        <ScoreBox>
          {score} / {Questions.length}
        </ScoreBox>

        <Reset onClick={restartQuiz}>Restart Quiz</Reset>
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default EndScreen;

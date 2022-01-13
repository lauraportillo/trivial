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

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <div>here is your score!</div>
        <h2>
          {score} / {Questions.length}
        </h2>

        <button onClick={restartQuiz}>Restart Quiz</button>
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default EndScreen;

// React
import { Questions } from '../data/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// // Components
// import FooterBlack from './FooterBlack';
// // Styles
// import styled from 'styled-components';

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <>
      <div>THE END</div>
      <h2>
        {score} / {Questions.length}
      </h2>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </>
  );
};

export default EndScreen;

// React
import { useState } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Components
import Landing from './Landing';
import Quiz from './Quiz';
import EndScreen from './EndScreen';
// Styles
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  }
`;

const App = () => {
  // Global state
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [gamerAnswer, setGamerAnswer] = useState('');

  console.log(gamerAnswer);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        score,
        setScore,
        gamerAnswer,
        setGamerAnswer,
      }}
    >
      <GlobalStyle />
      {gameState === 'menu' && <Landing />}
      {gameState === 'playing' && <Quiz />}
      {gameState === 'finished' && <EndScreen />}
    </GameStateContext.Provider>
  );
};

export default App;

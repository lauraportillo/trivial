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
  }
`;

const App = () => {
  //state
  const [gameState, setGameState] = useState('menu');

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
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

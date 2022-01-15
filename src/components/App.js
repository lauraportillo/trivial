// React
import { useEffect, useState } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Components
import Landing from './Landing';
import Quiz from './Quiz';
import EndScreen from './EndScreen';
// Services
import getDataFromApi from '../services/getDataFromApi';
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
  const [questions, setQuestions] = useState([]);
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  //vida del componente y promesa
  useEffect(() => {
    console.log(getDataFromApi());
    getDataFromApi().then((data) => setQuestions(data));
  }, []);

  return (
    <GameStateContext.Provider
      value={{
        questions,
        gameState,
        setGameState,
        score,
        setScore,
        userAnswers,
        setUserAnswers,
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

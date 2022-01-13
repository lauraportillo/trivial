// React
import { Questions } from '../data/Questions';
import { useState } from 'react';
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
  // //state
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [optionChosen, setOptionChosen] = useState('');

  const {
    gameState,
    setGameState,
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    optionChosen,
    setOptionChosen,
  } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };
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
  //   // para ordenar el array de forma aleatoria
  //   var arr1 = ["a", "b", "c", "d"];
  // arr1.sort(function() { return Math.random() - 0.5 });
  // console.log(arr1)

  const counter = currentQuestion + 1;

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <h2> Question {counter} of 10</h2>
        <Question />

        {/* <h2> {Questions[currentQuestion].question}</h2>

        <div>
          <button
            onClick={() => {
              chooseOption(Questions[currentQuestion].correct_answer);
            }}
          >
            {Questions[currentQuestion].correct_answer}
          </button>
          <button
            onClick={() => {
              chooseOption(Questions[currentQuestion].incorrect_answers[0]);
            }}
          >
            {Questions[currentQuestion].incorrect_answers[0]}
          </button>

          <button
            onClick={() => {
              chooseOption(Questions[currentQuestion].incorrect_answers[1]);
            }}
          >
            {Questions[currentQuestion].incorrect_answers[1]}
          </button>
          <button
            onClick={() => {
              chooseOption(Questions[currentQuestion].incorrect_answers[2]);
            }}
          >
            {Questions[currentQuestion].incorrect_answers[2]}
          </button>
        </div> */}

        {currentQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz} id="finishquiz">
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

// React
import { Questions } from '../data/Questions';
import { useState } from 'react';
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

// const Section1 = styled.section``;
// const Section2 = styled.section``;
// const Form = styled.section``;
// const Section3 = styled.section``;

const Quiz = () => {
  //state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const { score, setScore, gameState, setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState('finished');
  };

  const counter = currentQuestion + 1;

  //   // para ordenar el array de forma aleatoria
  //   var arr1 = ["a", "b", "c", "d"];
  // arr1.sort(function() { return Math.random() - 0.5 });
  // console.log(arr1)

  // // PENSAR CÓMO HACER PARA QUE  Questions.incorrect_answers[0]='optionA'
  // const optionA = 'optionA';
  // const answerA = Questions.incorrect_answers[0];

  // optionA = answerA;

  return (
    <Container>
      <Header>
        <Title>arts&trivial</Title>
      </Header>
      <Main>
        <section>
          <h2> Question {counter} of 10</h2>

          <h2> {Questions[currentQuestion].question}</h2>

          <div>
            <button
              onClick={() => {
                chooseOption('optionA');
              }}
            >
              {Questions[currentQuestion].incorrect_answers[0]}
            </button>
            <button
              onClick={() => {
                chooseOption('optionB');
              }}
            >
              {Questions[currentQuestion].correct_answer}
            </button>
            <button
              onClick={() => {
                chooseOption('optionC');
              }}
            >
              {Questions[currentQuestion].incorrect_answers[1]}
            </button>
            <button
              onClick={() => {
                chooseOption('optionD');
              }}
            >
              {Questions[currentQuestion].incorrect_answers[2]}
            </button>
          </div>

          {currentQuestion === Questions.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
              Finish Quiz
            </button>
          ) : (
            <button onClick={nextQuestion} id="nextQuestion">
              Next Question
            </button>
          )}
        </section>
      </Main>
      <FooterBlack />
    </Container>
  );
};

export default Quiz;

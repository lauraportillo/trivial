// React
import { Questions } from '../data/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';

// Styles
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Question = () => {
  const { currentQuestion, setOptionChosen } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };
  //   const nextQuestion = () => {
  //     if (Questions[currentQuestion].correct_answer === optionChosen) {
  //       setScore(score + 1);
  //     }
  //     setCurrentQuestion(currentQuestion + 1);
  //   };

  //   const finishQuiz = () => {
  //     if (Questions[currentQuestion].correct_answer === optionChosen) {
  //       setScore(score + 1);
  //     }
  //     setGameState('finished');
  //   };

  //   // para ordenar el array de forma aleatoria
  //   var arr1 = ["a", "b", "c", "d"];
  // arr1.sort(function() { return Math.random() - 0.5 });
  // console.log(arr1)

  //   const counter = currentQuestion + 1;

  return (
    <Container>
      <h2> {Questions[currentQuestion].question}</h2>

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
      </div>

      {/* {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="finishquiz">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )} */}
    </Container>
  );
};

export default Question;

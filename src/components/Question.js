// React
import { Questions } from '../data/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Styles
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin-top: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin-top: 20px;
`;

const Question = () => {
  const { currentQuestion, setOptionChosen } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  //   const responses = [
  //     Questions[currentQuestion].correct_answer,
  //     Questions[currentQuestion].incorrect_answers[0],
  //     Questions[currentQuestion].incorrect_answers[1],
  //     Questions[currentQuestion].incorrect_answers[2],
  //   ];

  //   // random responses
  //   responses.sort(function () {
  //     return Math.random() - 0.5;
  //   });

  //   const renderButton = () => {
  //     responses.forEach((response) => {
  //       <button
  //         onClick={() => {
  //           chooseOption(response);
  //         }}
  //       >
  //         {response}
  //       </button>;
  //     });
  //   };

  return (
    <>
      <Title> {Questions[currentQuestion].question}</Title>
      <Options>
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
      </Options>
    </>
  );
};

export default Question;

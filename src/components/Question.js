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

const List = styled.ul`
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
const Button = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  color: black;
  margin-bottom: 5px;
  width: 190px;
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

const Question = () => {
  const { currentQuestion, setOptionChosen } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const responses = [
    Questions[currentQuestion].correct_answer,
    Questions[currentQuestion].incorrect_answers[0],
    Questions[currentQuestion].incorrect_answers[1],
    Questions[currentQuestion].incorrect_answers[2],
  ];

  // random responses
  responses.sort(function () {
    return Math.random() - 0.5;
  });

  const renderButton = () => {
    return responses.map((response, index) => {
      return (
        <li key={index}>
          <Button
            onClick={() => {
              chooseOption(response);
            }}
          >
            {response}
          </Button>
        </li>
      );
    });
  };
  //  // random responses
  //  responses.sort(function () {
  //   return Math.random() - 0.5;
  // });

  // const renderButton = () => {
  //   return responses.map((response, index) => {
  //     return (
  //       <li key={index}>
  //         <Button
  //           onClick={() => {
  //             chooseOption(response);
  //           }}
  //         >
  //           {response}
  //         </Button>
  //       </li>
  //     );
  //   });
  // };

  return (
    <>
      <Title> {Questions[currentQuestion].question}</Title>
      <section>
        <List>{renderButton()} </List>
      </section>

      {/* <Options>
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
      </Options> */}
    </>
  );
};

export default Question;

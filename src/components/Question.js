// React
import { Questions } from '../data/Questions';
// Styles
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin-top: 20px;
  width: 280px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 25px;
    width: 480px;
  }
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

const Question = (props) => {
  const chooseOption = (option) => {
    props.setOptionChosen(option);
  };

  const responses = [
    Questions[props.currentQuestion].correct_answer,
    ...Questions[props.currentQuestion].incorrect_answers,
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

  return (
    <>
      <Title> {Questions[props.currentQuestion].question}</Title>
      <section>
        <List>{renderButton()} </List>
      </section>
    </>
  );
};

export default Question;

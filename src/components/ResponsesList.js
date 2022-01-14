// React
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Styles
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  margin-top: 20px;
`;

const ResponsesList = () => {
  const { userAnswers } = useContext(GameStateContext);

  return (
    <List>
      {userAnswers.map((userAnswer, index) => {
        console.log(userAnswer);

        return (
          <li key={index}>
            Answer {index + 1}:{userAnswer}
          </li>
        );
      })}
    </List>
  );
};

export default ResponsesList;

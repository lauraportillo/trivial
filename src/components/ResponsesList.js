// React
import { useContext } from 'react';
import { GameStateContext } from '../context/QuizContext';
// Styles
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Item = styled.li`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  color: black;
  margin-bottom: 3px;
`;

const ResponsesList = () => {
  const { userAnswers } = useContext(GameStateContext);

  return (
    <List>
      {userAnswers.map((userAnswer, index) => {
        return (
          <Item key={index}>
            {index + 1} {userAnswer}
          </Item>
        );
      })}
    </List>
  );
};

export default ResponsesList;

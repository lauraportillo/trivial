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

const ListGreen = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: green;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ListRed = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: red;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Item = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  color: black;
  margin-bottom: 3px;
`;

const ItemCorrect = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  color: green;
  margin-bottom: 3px;
`;

const ItemIncorrect = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  color: red;
  margin-bottom: 3px;
`;

const ResponsesList = (props) => {
  const { questions, userAnswers } = useContext(GameStateContext);

  // let statusIcon;
  // if (questions.correct_answer === [props.optionChosen]) {
  //   statusIcon = <i className="fa fa-check-circle"></i>;
  // } else {
  //   statusIcon = <i className="fa fa-times-circle"></i>;
  // }

  return (
    <List>
      {userAnswers.map((userAnswer, index) => {
        return (
          <li key={index}>
            <Item>
              {index + 1} {userAnswer}
            </Item>
          </li>
        );
      })}
    </List>
  );
};

export default ResponsesList;

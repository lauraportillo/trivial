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
  font-weight: 400;
  color: black;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 240px;
  @media (min-width: 768px) {
    width: 240px;
  }
`;

const Summary = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Item = styled.li`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  color: black;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ItemPara = styled.p`
  margin-bottom: 3px;
`;
const ItemGrey = styled.p`
  color: grey;
  margin-bottom: 15px;
`;

const ResponsesSummary = () => {
  const { questions, userAnswers } = useContext(GameStateContext);

  return (
    <List>
      <Summary>summary:</Summary>
      {userAnswers.map((userAnswer, index) => {
        return (
          <Item key={index}>
            <ItemSection>
              <ItemPara>
                {index + 1} {questions[index].question}
              </ItemPara>
              <ItemPara>Your answer: {userAnswer}</ItemPara>
              {/* <ItemGrey>
                {userAnswer === questions[index].correct_answer ? (
                  <i className="fa fa-check-circle"></i>
                ) : (
                  <i className="fa fa-times-circle"> </i>
                )}
              </ItemGrey> */}
              <ItemGrey>Correct answer: {questions[index].correct_answer}</ItemGrey>
            </ItemSection>
          </Item>
        );
      })}
    </List>
  );
};

export default ResponsesSummary;

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
  width: 190px;
  @media (min-width: 768px) {
    width: 240px;
  }
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
  align-items: flex-start;
`;
const ItemPara = styled.p`
  margin-right: 5px;
`;
const ItemGrey = styled.p`
  margin-right: 5px;
  color: grey;
`;

const ResponsesList = () => {
  const { questions, userAnswers } = useContext(GameStateContext);

  return (
    <List>
      {userAnswers.map((userAnswer, index) => {
        return (
          <Item key={index}>
            <ItemSection>
              <ItemPara>{index + 1}</ItemPara>
              <ItemPara>{userAnswer}</ItemPara>
              <ItemGrey>
                {userAnswer === questions[index].correct_answer ? (
                  <i className="fa fa-check-circle"></i>
                ) : (
                  <i className="fa fa-times-circle"> </i>
                )}
              </ItemGrey>
            </ItemSection>
          </Item>
        );
      })}
    </List>
  );
};

export default ResponsesList;

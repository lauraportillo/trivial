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
  console.log(questions);

  // let statusIcon;
  // if (questions === props.optionChosen) {
  //   statusIcon = <i className="fa fa-check-circle"></i>;
  // } else {
  //   statusIcon = <i className="fa fa-times-circle"></i>;
  // }

  return (
    <List>
      {userAnswers.map((userAnswer, index) => {
        console.log(questions[index].correct_answer);
        return (
          <li key={index}>
            <Item>
              {index + 1} {userAnswer}
              {userAnswer === questions[index].correct_answer ? (
                <i className="fa fa-check-circle"></i>
              ) : (
                <i className="fa fa-times-circle"></i>
              )}
            </Item>
          </li>
        );
      })}
    </List>
  );
};

export default ResponsesList;

// const renderUserAnswer = () => {
//   if (questions[index].correct_answer === props.optionChosen) {
//     return (
//       <List>
//         {userAnswers.map((userAnswer, index) => {
//           return (
//             <li key={index}>
//               <ItemCorrect>
//                 {index + 1} {userAnswer}
//               </ItemCorrect>
//             </li>
//           );
//         })}
//       </List>
//     );
//   } else {
//     return (
//       <List>
//         {userAnswers.map((userAnswer, index) => {
//           return (
//             <li key={index}>
//               <ItemIncorrect>
//                 {index + 1} {userAnswer}
//               </ItemIncorrect>
//             </li>
//           );
//         })}
//       </List>
//     );
//   }
// };

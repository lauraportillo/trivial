// React
import { Questions } from '../data/Questions';
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

const ResponsesList = (props) => {
  const counter = props.currentQuestion + 1;

  return (
    <List>
      <li>
        Answer {counter}:{props.optionChosen}
      </li>
    </List>
  );
};

export default ResponsesList;

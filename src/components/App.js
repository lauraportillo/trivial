// React
import { Route, Switch } from 'react-router-dom';
// Components
import Landing from './Landing';
import Trivial from './Trivial';
// Styles
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  }
`;

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyle />
        <Landing />
      </Route>

      <Route exact path="/trivial">
        <GlobalStyle />
        <Trivial />
      </Route>
    </Switch>
  );
};

export default App;

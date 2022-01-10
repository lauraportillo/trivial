// React
import { Route, Switch } from 'react-router-dom';
// Components
import Landing from './Landing';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
};

export default App;

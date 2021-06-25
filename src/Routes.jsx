import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

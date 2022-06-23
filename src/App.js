import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import ListPage from './ListPage';
import DetailPage from './DetailPage';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">List Page</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/villagers/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

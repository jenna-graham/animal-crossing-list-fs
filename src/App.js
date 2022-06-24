import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import ListPage from './ListPage';
import DetailPage from './DetailPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/villager/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

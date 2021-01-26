import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Rules from "./Components/Rules";
import Game from "./Components/Game";


function App() {
  return (
    <Router>
      <div className="main-div">
        <Switch>
          <Redirect from="/" to="/rules" exact strict/>
          <Route path="/rules" exact strict render={() => <Rules />} />
          <Route path="/game" exact strict render={() => <Game />} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

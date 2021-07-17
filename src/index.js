import React from 'react'; // You know what this is
import ReactDOM from 'react-dom'; // Import DOM
import './index.css'; // Import css
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NoMatch from './Components/NoMatch';
import Home from './Home';
import Deps from './Dependcies';
import Features from './Features';
import AllCmds from './Components/AllCmds';
import Auction from './Components/Cmds/Auction';
import Giveaway from './Components/Cmds/Giveaway';
import Lottery from './Components/Cmds/Lottery';

ReactDOM.render(
<React.StrictMode>
  <Router>
    <Switch>  
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/dependencies">
        <Deps />
      </Route>
      <Route exact path="/features">
        <Features />
      </Route>
      <Route path="/commands">
        <Switch>
        <Route exact path="/commands/all">
          <AllCmds />
        </Route>
        <Route exact path="/commands/auction">
          <Auction />
        </Route>
        <Route exact path="/commands/giveaway">
          <Giveaway />
        </Route>
        <Route exact path="/commands/lottery">
          <Lottery />
        </Route>
        <Route>
          <Redirect to="/commands/all" />
        </Route>
        </Switch>
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </Router>
</React.StrictMode>,
  document.getElementById('root')
);



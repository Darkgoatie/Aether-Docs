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
import Vouch from './Components/Cmds/Vouch';
import Timer from './Components/Cmds/Timer';
import Stats from './Components/Cmds/Stats';
import Role from './Components/Cmds/Role';
import User from './Components/Cmds/User';
import Message from './Components/Cmds/Message';
import Channel from './Components/Cmds/Channel';
import Server from './Components/Cmds/Server';
import Invite from './Components/Cmds/Invite';
import Dono from './Components/Cmds/Donation';
import Prefix from './Components/Cmds/Prefix';

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
        <Route exact path="/commands/vouch">
          <Vouch />
        </Route>
        <Route exact path="/commands/timer">
          <Timer />
        </Route>
        <Route exact path="/commands/stats">
          <Stats />
        </Route>
        <Route exact path="/commands/role">
          <Role />
        </Route>
        <Route exact path="/commands/user">
          <User />
        </Route>
        <Route exact path="/commands/message">
          <Message />
        </Route>
        <Route exact path="/commands/channel">
          <Channel />
        </Route>
        <Route exact path="/commands/server">
          <Server />
        </Route>
        <Route exact path="/commands/invite">
          <Invite />
        </Route>
        <Route exact path="/commands/donation">
          <Dono />
        </Route>
        <Route exact path="/commands/prefix">
          <Prefix />
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



import { Route, Switch } from "react-router-dom";
import All from "./Comps/Commands/All";
import Sidebar from "./Comps/Sidebar";

import Auction from "./Comps/Commands/Auction";
import Giveaway from "./Comps/Commands/Giveaway";
import Channel from "./Comps/Commands/Channel";
import Invite from "./Comps/Commands/Invite";
import Donation from "./Comps/Commands/Donation";
import Lottery from "./Comps/Commands/Lottery";
import Message from "./Comps/Commands/Message";
import Prefix from "./Comps/Commands/Prefix";
import Role from "./Comps/Commands/Role";
import Server from "./Comps/Commands/Server";
import Stats from "./Comps/Commands/Stats";
import Timer from "./Comps/Commands/Timer";
import User from "./Comps/Commands/User";
import Vouch from "./Comps/Commands/Vouch";
const Cmds = () => {
  return (
    <Switch>
      <Route exact path="/commands">
        <Sidebar />
        <All />
      </Route>
      <Route exact path="/commands/auction">
        <Sidebar />
        <Auction />
      </Route>
      <Route exact path="/commands/channel">
        <Sidebar />
        <Channel />
      </Route>
      <Route exact path="/commands/giveaway">
        <Sidebar />
        <Giveaway />
      </Route>
      <Route exact path="/commands/donation">
        <Sidebar />
        <Donation />
      </Route>
      <Route exact path="/commands/invite">
        <Sidebar />
        <Invite />
      </Route>
      <Route exact path="/commands/lottery">
        <Sidebar />
        <Lottery />
      </Route>
      <Route exact path="/commands/message">
        <Sidebar />
        <Message />
      </Route>
      <Route exact path="/commands/prefix">
        <Sidebar />
        <Prefix />
      </Route>
      <Route exact path="/commands/role">
        <Sidebar />
        <Role />
      </Route>
      <Route exact path="/commands/server">
        <Sidebar />
        <Server />
      </Route>
      <Route exact path="/commands/stats">
        <Sidebar />
        <Stats />
      </Route>
      <Route exact path="/commands/timer">
        <Sidebar />
        <Timer />
      </Route>
      <Route exact path="/commands/user">
        <Sidebar />
        <User />
      </Route>
      <Route exact path="/commands/vouch">
        <Sidebar />
        <Vouch />
      </Route>
      <Route>
        <meta httpEquiv="refresh" content="0; URL='/commands'" />
      </Route>
    </Switch>
  );
};

export default Cmds;

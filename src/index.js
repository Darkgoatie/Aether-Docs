import { StrictMode } from "react"; // You know what this is
import { render } from "react-dom"; // Import DOM
import "./index.css"; // Import css
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cmds from "./Cmds";
render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/invite">
          <meta
            httpEquiv="refresh"
            content="0; URL='https://discord.com/oauth2/authorize?client_id=%20805537268349665290&permissions=8&scope=bot%20applications.commands'"
          />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/vote">
          <meta
            httpEquiv="refresh"
            content="0; URL='https://top.gg/bot/805537268349665290'"
          />
        </Route>
        <Route exact path="/support">
          <meta
            httpEquiv="refresh"
            content="0; URL='https://discord.gg/Dn3VJmP3Ba'"
          />
        </Route>
        <Route exact path="/donate">
          <meta
            httpEquiv="refresh"
            content="0; URL='https://patreon.com/aether1611'"
          />
        </Route>
        <Route path="/commands">
          <Cmds />
        </Route>
        <Route>
          <meta httpEquiv="refresh" content="0;URL='/home'" target="_blank" />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

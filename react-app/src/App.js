import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InventoryList from "./InventoryList";
import InventoryEdit from "./InventoryEdit";
import LogIn from "./login";
import "./App.css";
import Registration from "./registration";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={LogIn} />
          <Route path="/registration" exact={true} component={Registration} />
          <Route path="/inventories" exact={true} component={InventoryList} />
          <Route path="/inventories/:id" component={InventoryEdit} />
        </Switch>
      </Router>
    );
  }
}
export default App;
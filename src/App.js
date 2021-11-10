import "./App.css";
import { Switch, Route } from "react-router-dom";

import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Companies from "./pages/Companies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/customer/">
          <Customers></Customers>
        </Route>
        <Route exact path="/company/">
          <Companies></Companies>
        </Route>
        <Route path="/customer/:id">
          <Customer></Customer>
        </Route>
        <Route path="/company/:id">
          <Company></Company>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

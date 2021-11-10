import "./App.css";
import { Switch, Route } from "react-router-dom";

import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Home from "./components/Home";
import Customers from "./pages/Customers";
import Companies from "./pages/Companies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/costumer/">
          <Customers></Customers>
        </Route>
        <Route exact path="/company/:">
          <Companies></Companies>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/costumer/:id">
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

import "./App.css";
import { members } from "./components/MembersArr";
import { useHistory, Switch, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Home from "./components/Home";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/costumer/:id">
          <Customer></Customer>
        </Route>
        <Route exact path="/company/:id">
          <Company></Company>
        </Route>
        <Route exact path="/">
          <Home members={members}></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

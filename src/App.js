import logo from "./logo.svg";
import "./App.css";
import TopNavBar from "./components/Navbar/TopNavBar";
import List from "./components/Moleclue/List";
import Home from "./components/Page/Home";
import Add from "./components/Page/Add";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={TopNavBar} />
      </Switch>
      <Switch>
        <div className="toptop">
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
        </div>
      </Switch>
    </div>
  );
}

export default App;

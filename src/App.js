import logo from "./logo.svg";
import "./App.css";
import TopNavBar from "./components/Navbar/TopNavBar";
import TopNavBarBack from "./components/Navbar/TopNavBarBack";
import List from "./components/Moleclue/List";
import Home from "./components/Page/Home";
import Add from "./components/Page/Add";
// import Card from "./components/Atom/Card";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TopNavBar} />
        <Route exact path="/add" component={TopNavBarBack} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        {/* <Route exact path="/card" component={Card} /> */}
      </Switch>
    </div>
  );
}

export default App;

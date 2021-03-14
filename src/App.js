// import logo from "./logo.svg";
import "./App.css";
import TopNavBar from "./components/Navbar/TopNavBar";
import TopNavBarBack from "./components/Navbar/TopNavBarBack";
import TopNavBarDetail from "./components/Navbar/TopNavBarDetail";
// import List from "./components/Moleclue/List";
import Home from "./components/Page/Home";
import Add from "./components/Page/Add";
import footer from "./components/Moleclue/footer";
import EventDetail from "./components/Page/EventDetail";
// import Card from "./components/Atom/Card";
import { Route, Switch } from "react-router-dom";
// import cardDetail from "./components/Page/cardDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TopNavBar} />
        <Route exact path="/add" component={TopNavBarBack} />
        <Route exact path="/event/:id" component={TopNavBarDetail} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/event/:id" component={EventDetail} />
        {/* <Route exact path="/card" component={Card} /> */}
      </Switch>
      <Switch>
        <Route path="/" component={footer} />
      </Switch>
    </div>
  );
}

export default App;

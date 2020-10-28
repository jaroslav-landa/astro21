import React from "react";
import "./styles/style.css";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import News from "./News";
import Chronicle from "./Chronicle";
import Club from "./Club";
import Observatory from "./Observatory";
import Articles from "./Articles";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <p>Astronomická společnost Chomutov</p>
            </Link>
          </header>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/chronicle" component={Chronicle} />
            <Route path="/club" component={Club} />
            <Route path="/observatory" component={Observatory} />
            <Route path="/articles" component={Articles} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

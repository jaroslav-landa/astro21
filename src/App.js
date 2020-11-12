import React from "react";
import "./styles/style.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import News from "./components/News";
import Chronicle from "./components/Chronicle";
import Club from "./components/Club";
import Observatory from "./components/Observatory";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Astronomická společnost Chomutov</Link>
        </header>
        <NavigationBar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Home />
                <News />
              </div>
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/chronicle" component={Chronicle} />
          <Route path="/club" component={Club} />
          <Route path="/observatory" component={Observatory} />
          <Route path="/articles" component={Articles} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <footer>
          <p>Astronomická společnost Chomutov 2020</p>
          <p>Web by: Jaroslav Landa</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

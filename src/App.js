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
        <div className="app">
          <header className="header">
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

          <footer className="footer">
            <p>Astronomická společnost Chomutov 2020</p>
            <p>Web by: Jaroslav Landa</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

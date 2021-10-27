import React from "react"
import { Route, Switch } from "react-router-dom";
import About from "./About";
import DogPage from "./DogPage";
import NavBar from "./NavBar";
import Header from "./Header";
import AgencyContainer from "./AgencyContainer"


function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/">
        <Header />
        </Route>
      <Route exact path="/dog-page">
      <DogPage />
      </Route>
      <Route exact path="/agency-page">
      <AgencyContainer />
      </Route>
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

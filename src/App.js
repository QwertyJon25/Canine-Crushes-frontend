import React from "react"
import { Route, Switch } from "react-router-dom";
import About from "./About"
import DogPage from "./DogPage"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/about">
      <About />
      </Route>
      <Route exact page="/">
        <About />
        <DogPage />
        </Route>
      <Route exact path="/dog-page">
      <DogPage />
      </Route>
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

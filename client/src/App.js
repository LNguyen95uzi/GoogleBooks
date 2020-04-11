import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./Components/Books";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/search" component={Books} exact></Route>
          <Route path="/saved" component={Books} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

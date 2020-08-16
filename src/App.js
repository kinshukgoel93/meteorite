import React from "react";
import "./App.css";
import {Provider} from 'react-redux';
import {store} from '../src/Redux/store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Viewboard from "../src/Components/Viewboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>
            <Switch>
              <Route path="/">
                <Viewboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

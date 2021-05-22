import React from "react";
import "./App.css";
import "./styles/sidebar.scss";
import "./styles/editor.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/editor">
              <h1>Editor</h1>
            </Route>
            <Route path="/">
              <Editor />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

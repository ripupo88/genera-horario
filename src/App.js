import React from "react";
import "./App.css";
import Admin from "./components/layout/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreem from "./components/layout/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LoginScreem />
                </Route>
                <Route path="/">
                    <Admin />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

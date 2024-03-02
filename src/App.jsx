// App.js

import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../src/components/login.jsx";
import Signup from "../src/components/Signup.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

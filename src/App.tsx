import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BROWSE} component={Browse} />
        <Route path={ROUTES.SIGN_UP} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;

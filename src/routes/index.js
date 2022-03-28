import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
export default Routes;

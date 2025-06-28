import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <route.sidebar>
                <route.component {...props} />
              </route.sidebar>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}

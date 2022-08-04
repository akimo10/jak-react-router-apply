import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {console.log(url)}
            {Page1Routes.map((route) => (
              <Route
                key={route}
                exact={route.exact}
                path={`${url}${route.path}`}
                render={() => route.children}
              />
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {console.log(url)}
            {Page2Routes.map((route) => (
              <Route
                key={route}
                exact={route.exact}
                path={`${url}${route.path}`}
                render={() => route.children}
              />
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};

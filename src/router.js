import React, { Suspense, lazy } from "react";
import { TopProgress } from "./components/loader";
import App from "./App";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./routes/login/index";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const lazyLoadModule = (url) =>
  lazy(async () => {
    //wierd bug with react need to pass url as string template.
    const module = await import(`${url}`);
    await delay(3000);

    return module;
  });

function Router() {
  const routes = [
    {
      path: "/dashboard",
      component: lazyLoadModule("./routes/dashboard/"),
      exact: true,
    },
    {
      path: "/tabs",
      component: lazyLoadModule("./routes/tabs/"),
      exact: true,
    },
    {
      path: "/cards",
      component: lazyLoadModule("./routes/cards/"),
      exact: true,
    },
    {
      path: "/login",
      component: lazyLoadModule("./routes/login/"),
      exact: true,
    },
    {
      path: "*",
      component: lazyLoadModule("./pages/404"),
    },
  ];
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Suspense fallback={<TopProgress />}>
          <Switch>
            <Redirect from="/" to="login" exact />
            {routes.map((props, key) => (
              <Route {...props} key={key} />
            ))}
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}

export default Router;

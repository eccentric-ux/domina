import React, { Suspense, lazy } from "react";
import {TopProgress} from './components/loader';
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const delay = ms => new Promise(res => setTimeout(res, ms));
const lazyLoadModule = (url) => lazy(async () => {
  const module = await import(`${url}`);
  await delay(3000);
  //wierd bug with react need to pass url as string template.
  return module;
});

function Router() {
  const routes = [
    {
      path: "/",
      component: lazyLoadModule("./routes/dashboard/"),
      exact: true
    },
    {
      path: "/tabs",
      component: lazyLoadModule("./routes/tabs/"),
      exact: true
    },
    {
      path: "/cards",
      component: lazyLoadModule("./routes/cards/"),
      exact: true
    },
    {
      path: "*",
      component: lazyLoadModule("./pages/404")
    }
  ];
  return (
    <BrowserRouter>
      <App>
        <Suspense fallback={<TopProgress />}>
          <Switch>
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

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import Home from './views/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

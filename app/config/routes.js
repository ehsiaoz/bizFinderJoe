import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Layout } from '../pages/Layout';
import { Cms } from '../pages/Cms';
import { Home } from '../pages/Home';
import { Listing } from '../pages/Listing';
import { Results } from '../pages/Results';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/cms" component={Cms} />
      <Route path="/search/:category(/:location)" component={Results} />
      <Route path="/biz/:id" component={Listing} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export { router };

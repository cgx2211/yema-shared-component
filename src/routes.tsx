import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Test = Loadable({
  loader: () => import(/* webpackChunkName: "test" */ 'modules/test'),
  loading: () => <div>loading ...</div>,
});
const Yematech = Loadable({
  loader: () => import(/* webpackChunkName: "Yematech" */ 'modules/yematech'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/:path/:type/:component" component={Yematech} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </div>
);

export default Routes;

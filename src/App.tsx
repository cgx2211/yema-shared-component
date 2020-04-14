import React from 'react';
import {
  Router, Route, Switch, Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';
import AppRoutes from './routes';

const history = createBrowserHistory();

const components = [
  { path: 'yematech', type: 'Select', name: 'RadioSelect' },
];
const App: React.FC = (props) => (
  <Router history={history}>
    <Switch>
      <Route path="">
        <div className="app-container">
          <ul className="app-menus">
            <li>
              <Link to="/test">组件测试</Link>
            </li>
            <li>------------------------------------</li>
            {
              components.map((component) => (
                <li key={component.name}>
                  <Link
                    to={`/${component.path}/${component.type}/${component.name}`}
                  >
                    {component.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="component-container">
            <AppRoutes />
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;

import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import store from '../store';
import { Provider } from 'react-redux';


import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPage = Loadable({
  loader: () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  loading: Loading,
});

const AsyncNoMatch = Loadable({
  loader: () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  loading: Loading
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dynamic" component={AsyncDynamicPage} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
};

export default hot(module)(App);
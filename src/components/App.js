import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import store from '../store';
import { Provider } from 'react-redux';

import Home from '../components/Home';
import Loading from './Loading';
import Layout from './Layout';

const Login = Loadable({
  loader: () => import(/* webpackChunkName:'Login' */ '../components/Login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import(/* webpackChunkName:'Register' */ '../components/Register'),
  loading: Loading,
});

const Tutorial = Loadable({
  loader: () => import(/* webpackChunkName:'Tutorial' */ '../components/Tutorial'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName:'Profile' */ '../components/Profile'),
  loading: Loading,
});


const NotFound = Loadable({
  loader: () => import(/* webpackChunkName:'NotFound' */ '../components/NotFound'),
  loading: Loading
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/@:username" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>

  );
};

export default hot(module)(App);
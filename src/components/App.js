import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import agent from '../agent';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from '../components/Home';
import Loading from './Loading';
import Layout from './Layout';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292E'
    }
  }
});

const mapStateToProps = (state) => ({
  appName: state.common.appName,
  appLoaded: state.common.appLoaded,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token })
})

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.User.get() : null, token);
  }
  render() {
    if (this.props.appLoaded) {
      return (
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
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
          </MuiThemeProvider>
        </Router>
      );
    }
    return (
      <div>
        <Layout
          appName={this.props.appName}
          currentUser={this.props.currentUser}>
        </Layout>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
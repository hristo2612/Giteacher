import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import agent from '../agent';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
});

const Home = (props) => {
  return (
    <Layout>
      <p>{props.appName}</p>
      <p>
        <Link to="/dynamic">
          <Button variant="contained" color="primary">Dynamic Page</Button>
        </Link>
      </p>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
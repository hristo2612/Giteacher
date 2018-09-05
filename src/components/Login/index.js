import React from 'react';
import { Header } from 'semantic-ui-react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../../constants/actionTypes';
import Form from './Form';
import ErrorList from '../ErrorList';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.User.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Login</h2>
        <ErrorList errors = {this.props.errors} />
        <Form onSubmit={this.submitForm(email, password)} email={email} password={password} changeEmail={this.changeEmail} changePassword={this.changePassword}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
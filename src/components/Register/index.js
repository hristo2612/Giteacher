import React from 'react';
import Form from './Form';
import agent from '../../agent';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../../constants/actionTypes';
import ErrorList from '../ErrorList';

const mapStateToProps = state => ({
  ...state.auth,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onChangeUsername: value =>
    dispatch({type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, username, password) =>
    dispatch({ type: REGISTER, payload: agent.User.register(email, username, password) }),
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, username, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, username, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const username = this.props.username;
    const password = this.props.password;
    //debugger;
    const errors = this.props.errors;
    const inProgress = this.props.inProgress;
    const currentUser = this.props.currentUser;

    if (currentUser) {
      return <Redirect to="/" />
    }
    
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Register</h2>
        <ErrorList errors={errors} />
        <Form onSubmit={this.submitForm(email, username, password)} email={email} password={password} username={username} changeEmail={this.changeEmail} changePassword={this.changePassword} changeUsername={this.changeUsername} inProgress={inProgress}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SignIn from '@material-ui/icons/ExitToApp';
import AboutUs from '@material-ui/icons/SupervisorAccount';
import history from '../../history';

const handleOnClick = (url) => () => {
  history.push(url);
}

export const listSection = (
  <div>
    <ListItem button onClick={handleOnClick('/login')}>
      <ListItemIcon>
        <SignIn />
      </ListItemIcon>
      <ListItemText primary="Sign In" />
    </ListItem>
    <ListItem button onClick={handleOnClick('/register')}>
      <ListItemIcon>
        <AboutUs />
      </ListItemIcon>
      <ListItemText primary="Register" />
    </ListItem>
  </div>
);

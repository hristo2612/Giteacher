// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import history from '../../history';
import { Link } from 'react-router-dom';

const handleOnClick = (url) => () => {
  history.push(url);
}

export const listSection = (
  <div>
    <ListItem button onClick={handleOnClick('/login')}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Sign In" />
    </ListItem>
    <ListItem button onClick={handleOnClick('/register')}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Up" />
    </ListItem>
    <ListItem button onClick={handleOnClick('/@My Profile')}>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
  </div>
);

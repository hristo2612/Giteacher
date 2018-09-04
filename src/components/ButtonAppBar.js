import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { OPEN_MENU } from '../constants/actionTypes';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  whiteAssText: {
    color: '#ffffff !important'
  }
};

const mapDispatchToProps = dispatch => ({
  clickMenuButton: () => dispatch({
    type: OPEN_MENU
  })
});

const ButtonAppBar = (props) => {
  const { classes, clickMenuButton } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={clickMenuButton} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/" className={classes.whiteAssText}>
              Giteacher
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login" className={classes.whiteAssText}>
              Sign in
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/register" className={classes.whiteAssText}>
              Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(withStyles(styles)(ButtonAppBar));
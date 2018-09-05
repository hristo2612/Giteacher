import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { OPEN_MENU } from '../constants/actionTypes';
import history from '../history';
import { Header__light, Header__dark } from '../styling/App.css';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !important'
  },
  bar: {
    //backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  flex: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer'
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

/*
Cool gradients:
45deg, #49B84F 60%, #24292E 40%



*/

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    // }
  }
})

const ButtonAppBar = (props) => {
  const { classes, clickMenuButton } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar style={{ background: 'linear-gradient(to right, #24292E, #4f5964)' }} className={classes.bar} position="static">
          <Toolbar>
            <IconButton onClick={clickMenuButton} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography onClick={() => { history.push('/') }} variant="title" color="inherit" className={classes.logo}>
              Giteacher
            </Typography>
            <div className={classes.flex}></div>
            <Button onClick={() => { history.push('/login') }} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(withStyles(styles)(ButtonAppBar));
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { listSection } from './tileData';
import { CLOSE_MENU } from '../../constants/actionTypes';
import Typography from '@material-ui/core/Typography';

const styles = {
  list: {
    width: 230
  },
  centered: {
    width: 'fit-content',
    marginLeft: '72px',
    paddingTop: '18px',
    paddingBottom: '15px'
  }
};

const mapStateToProps = state => ({
  menuOpen: state.common.menuOpen
});

const mapDispatchToProps = dispatch => ({
  onCloseMenu: () => dispatch({
    type: CLOSE_MENU
  })
});

class TemporaryDrawer extends React.Component {

  render() {
    const { classes, onCloseMenu, menuOpen } = this.props;
    const list = (
      <div className={classes.list}>
        <List>{listSection}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={menuOpen} onClose={onCloseMenu}>
          <div
            tabIndex={0}
            role="button"
            onClick={onCloseMenu}
            onKeyDown={onCloseMenu}
          >
            <Typography className={classes.centered} variant="title" color="inherit">
                Giteacher
            </Typography>
            {list}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TemporaryDrawer));

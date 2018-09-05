import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import UserAccountMenu from './UserAccountMenu';
import LeftDrawer from './LeftDrawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class TopAppBar extends React.Component {
  static defaultProps = {
    pageTitle: '',
  }

  state = {
    drawerOpen: false,
  };

  toggleDrawer = drawerOpen => () => this.setState({ drawerOpen });

  render() {
    const { classes, pageTitle } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <LeftDrawer
          open={drawerOpen}
          onClick={this.toggleDrawer(false)}
        />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={this.toggleDrawer(true)} />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {pageTitle}
            </Typography>
            <UserAccountMenu />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
};

export default compose(
  withStyles(styles),
)(TopAppBar);

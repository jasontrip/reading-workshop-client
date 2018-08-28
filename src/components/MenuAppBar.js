import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';


import LoginOrRegisterDialog from './LoginOrRegisterDialog';
import LeftDrawer from './LeftDrawer';

import { clearAuthToken } from '../localStorage';
import { clearUserData } from '../actions/user';
import { toggleLoginOrRegisterDialogOpen } from '../actions/ui';

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

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    drawerOpen: false,
  };

  logIn = event => {
    this.props.dispatch(toggleLoginOrRegisterDialogOpen(true));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.dispatch(clearUserData());
    this.setState({ anchorEl: null });
    clearAuthToken();
  };

  toggleDrawer = (drawerOpen) => () => {
    this.setState ({
      drawerOpen
    });
  }

  handleCloseLoginOrRegisterDialog = () => {
    this.props.dispatch(toggleLoginOrRegisterDialogOpen(false));
  }

  render() {
    const { classes, user, showLoginOrRegisterDialog } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <LeftDrawer
          open={this.state.drawerOpen}
          onClick={this.toggleDrawer(false)}
        />
        <LoginOrRegisterDialog
          open={showLoginOrRegisterDialog}
          onClose={this.handleCloseLoginOrRegisterDialog}
        />

        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer(true)} />
            </IconButton>
            <Typography
              variant="title" 
              color="inherit"
              className={classes.flex}>
              {this.props.pageTitle}
            </Typography>
            {!user.loggedIn && (
              <Button color="inherit" onClick={this.logIn}>
                Login | Register
              </Button>
            )}
            {user.loggedIn && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  showLoginOrRegisterDialog: state.ui.showLoginOrRegisterDialog
});

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(MenuAppBar);
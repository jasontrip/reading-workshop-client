import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  IconButton, MenuItem, Menu, Button,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LoginOrRegisterDialog from './LoginOrRegisterDialog';
import { clearAuthToken } from '../localStorage';
import { clearUserData } from '../actions/user';
import { toggleLoginOrRegisterDialogOpen } from '../actions/ui';

export class UserAccountMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  logIn = () => {
    const { dispatch } = this.props;
    dispatch(toggleLoginOrRegisterDialogOpen(true));
  };

  handleMenu = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(clearUserData());
    this.setState({ anchorEl: null });
    clearAuthToken();
  };

  handleCloseLoginOrRegisterDialog = () => {
    const { dispatch } = this.props;
    dispatch(toggleLoginOrRegisterDialogOpen(false));
  }

  render() {
    const { loggedIn, showLoginOrRegisterDialog } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <LoginOrRegisterDialog
          open={showLoginOrRegisterDialog}
          onClose={this.handleCloseLoginOrRegisterDialog}
        />
        {!loggedIn && (
          <Button color="inherit" onClick={this.logIn}>
            Login | Register
          </Button>
        )}
        {loggedIn && (
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
      </div>
    );
  }
}

UserAccountMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  showLoginOrRegisterDialog: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  showLoginOrRegisterDialog: state.ui.showLoginOrRegisterDialog,
});

export default connect(mapStateToProps)(UserAccountMenu);

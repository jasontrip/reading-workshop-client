import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Typography from '@material-ui/core/Typography';

import UsernameAndPasswordForm from './UsernameAndPasswordForm';
import {required, nonEmpty, email, noWhitespace} from '../validators';
import { logInUser, toggleLoginOrRegisterDialogOpen } from '../actions';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  dialog: {
    height: "400px",
    width: "400px",
  },
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class LoginOrRegisterDialog extends React.Component {
  state = {
    tab: 0,
  };

  logIn = (username, password) => {

    return sleep(1000)
      .then(() => this.props.dispatch(logInUser(username, password)))
      .then(() => this.props.dispatch(toggleLoginOrRegisterDialogOpen(false)));
  }

  register = (username, password) => {
    console.log('register');
  };

  handleChange = (event, value) => {
    this.setState({ tab: value });
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };


  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    const { tab } = this.state;

    return (
      <Dialog
        classes={{ paper: classes.dialog }}
        open={ this.state.open }
        onClose={ this.handleClose }
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <div>
          <Tabs value={ tab } onChange={this.handleChange} centered >
            <Tab label="Log In" />
            <Tab label="Register" />
          </Tabs>
          { tab === 0 && 
            <TabContainer>
              <UsernameAndPasswordForm
                buttonText='Log In'
                validateUsername={ [required, nonEmpty, noWhitespace] }
                validatePassword={ [required, nonEmpty] }
                onSubmit={ this.logIn }
              />
            </TabContainer>
          }
          { tab === 1 &&
            <TabContainer>
              <UsernameAndPasswordForm
                buttonText='Register'
                validateUsername={ [required, nonEmpty, email, noWhitespace] }
                validatePassword={ [required, nonEmpty, noWhitespace] }
                onSubmit={ this.register }
              />
            </TabContainer>
          }
        </div>
      </Dialog>
    );
  }
}

LoginOrRegisterDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default connect()(withStyles(styles)(LoginOrRegisterDialog));
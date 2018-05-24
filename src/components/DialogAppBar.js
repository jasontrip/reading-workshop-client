import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

export function DialogAppBar(props) {
	const {classes, pristine, submitting, valid} = props;

	function onSubmit(event) {
		props.onSubmit(event);
	}
	function handleClose(event) {
		// props.history.push('/workshops');
	}
	return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleClose} aria-label="Close">
          <Link to="/workshops">
            <CloseIcon />
          </Link>
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {props.dialogTitle}
        </Typography>
        <Button
        	color="inherit"
        	onClick={onSubmit}
        	type="submit"
        	disabled={pristine || submitting || !valid?true:false}>
          save
        </Button>
        <Button color="inherit" onClick={handleClose}>
          delete
        </Button>
      </Toolbar>
    </AppBar>
	)
}

export default withStyles(styles)(DialogAppBar);
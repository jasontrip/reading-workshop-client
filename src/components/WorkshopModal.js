import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import WorkshopForm from './WorkshopForm';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { editWorkshop } from '../actions/workshops';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const state = { isOpen: false }

export function WorkshopModal(props) {
	const { dispatch, currentWorkshop, classes } = props;
	state.isOpen = currentWorkshop?true:false;

	const handleClose = () => {
		state.isOpen = false;
		dispatch(editWorkshop(null));
	}

	return (
		<Dialog
	    open={ state.isOpen }
	    onClose={ handleClose }
	    aria-labelledby="simple-dialog-title"
	  >
	  	<WorkshopForm currentWorkshop={ currentWorkshop } />
	  	<Button
				variant="fab"
				color="primary"
				aria-label="Add Student"
				className={classes.button}
			>
        <AddIcon />
      </Button>
	  </Dialog>
	)
}

const mapStateToProps = state => ({
	currentWorkshop: state.workshops.currentWorkshop
});

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
) (WorkshopModal);
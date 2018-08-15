import React from 'react';
import {connect} from 'react-redux';
import './Workshop.css';

import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import requiresLogin from './requires-login';
import WorkshopForm from './WorkshopForm';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

export function Workshop(props) {
	const { classes } = props;
	const { workshopId } = props.match.params;
	const currentWorkshop = props.workshops.find(w => w._id === workshopId);

	const studentListItems = currentWorkshop.students.map( (student, index) => (
		<div key={index}>
			<Divider />
			<ListItem button >
				<ListItemText primary={`${student.firstName} ${student.lastName}`} />
			</ListItem>
		</div>
	));

	return (
		<div>
			<WorkshopForm workshop={currentWorkshop} history={props.history} />
			<List>
				{studentListItems}
				<Divider />
			</List>
			<Button
				variant="fab"
				color="primary"
				aria-label="Add Student"
				className={classes.button}
			>
        <AddIcon />
      </Button>
		</div>
	)
}

const mapStateToProps = state => ({
	workshops: state.readingWorkshop.user.workshops
});

export default compose(
	requiresLogin(),
	withStyles(styles),
	connect(mapStateToProps)
) (Workshop);
import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import requiresLogin from './requires-login';
import MenuAppBar from './MenuAppBar';

import {List} from '@material-ui/core/';
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

export function Roster(props) {
	const { students, classes } = props;

	const studentList = students.map((student, index) => (
		<div key={index}>
			<ListItem button>
				<ListItemText
					primary={`${student.firstName} ${student.lastName}`}
				/>
			</ListItem>
			<Divider />
		</div>
	));

	return (
		<div>
			<MenuAppBar pageTitle="Roster" />
			<List>
				{studentList}
			</List>

			<Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
		</div>
	);
}

const mapStateToProps = state => ({
	students: state.readingWorkshop.user.students
});

export default compose(
	requiresLogin(),
	withStyles(styles),
	connect(mapStateToProps)
) (Roster);
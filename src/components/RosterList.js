import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Face as FaceIcon } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Add as AddIcon } from '@material-ui/icons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

export function RosterList(props) {
	const { students, classes, editStudent } = props;

	const onClick = (student) => {
		editStudent(student);
	}

	const studentList = students.map((student, index) => (
		<div key={index}>
			<ListItem
				button
				divider
				onClick={ () => onClick(student) }
			>
				<FaceIcon />
				<ListItemText
					primary={`${student.firstName} ${student.lastName}`}
				/>
			</ListItem>
		</div>
	));

	return (
		<div>
			<List>{ studentList }</List>
			<Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
	    	<AddIcon onClick={ () => editStudent({}) } />
	    </Button>
	  </div>
	 );
}

export default withStyles(styles)(RosterList);

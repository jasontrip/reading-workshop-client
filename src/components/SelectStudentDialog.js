import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Face as FaceIcon } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText';

export function LookupStudentsDialog(props) {
	const { roster, open, onClose, onAddStudent } = props;

	const rosterListItems = roster.map((student, index) => (
		<ListItem button
			key={ index }
			onClick={ () => onAddStudent(student) }>
			<FaceIcon />
			<ListItemText
				primary={ `${ student.firstName } ${ student.lastName }` } />
		</ListItem>
	));

	return (
		<Dialog
			open={ open }
			onClose={ onClose }
		>
			<DialogTitle id="simple-dialog-title">Choose a student from your roster</DialogTitle>
			<div>
				<List>{ rosterListItems }</List>
			</div>
		</Dialog>
	)
}

const mapStateToProps = state => ({
	roster: state.user.students
});

export default connect(mapStateToProps)(LookupStudentsDialog);
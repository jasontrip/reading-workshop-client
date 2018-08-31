import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Face as FaceIcon } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText';

export function SelectStudentDialog(props) {
	const { listOfAvailableStudentsToAdd, open, onClose, handleAddStudent } = props;

	const listOfAvailableStudentsToAddItems = listOfAvailableStudentsToAdd.map((student, index) => (
		<ListItem button
			key={ index }
			onClick={ () => handleAddStudent(student) }>
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
				<List>{ listOfAvailableStudentsToAddItems }</List>
			</div>
		</Dialog>
	)
}



export default SelectStudentDialog;
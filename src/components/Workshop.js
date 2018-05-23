import React from 'react';
import {connect} from 'react-redux';
import './Workshop.css';

import WorkshopForm from './WorkshopForm';
import Dialog from '@material-ui/core/Dialog';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export function Workshop(props) {
	const {sessionNumber} = props.match.params;
	const currentWorkshop = props.workshops
		.find(workshop => workshop.sessionNumber === parseInt(sessionNumber, 10));

	const studentListItems = currentWorkshop.students.map( (student, index) => (
		<div key={index}>
			<ListItem button >
				<ListItemText primary={`${student.firstName} ${student.lastName}`} />
			</ListItem>
			<Divider />
		</div>
	));

	return (
		<Dialog
			fullScreen
			open={true}
		>
			<div>
				<WorkshopForm />
				<List>
					<ListItem button >
						<ListItemText primary="add a student..." />
					</ListItem>
					<Divider />
					{studentListItems}
				</List>
			</div>
		</Dialog>
	)
}

const mapStateToProps = state => ({
	workshops: state.readingWorkshop.workshops
});

export default connect(mapStateToProps)(Workshop);
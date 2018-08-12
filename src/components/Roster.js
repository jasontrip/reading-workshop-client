import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import requiresLogin from './requires-login';
import AddStudent from './AddStudent';
import RemoveRosterListItem from './RemoveRosterListItem';
import MenuAppBar from './MenuAppBar';

import {List} from '@material-ui/core/';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export function Roster(props) {
	const { students } = props;

	console.log(props);

	const studentList = students.map((student, index) => (
		<div key={index}>
			<ListItem button>
				<RemoveRosterListItem id={student._id} />
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
				<ListItem>
					<AddStudent />
				</ListItem>
				<Divider />
				{studentList}
			</List>
		</div>
	);
}

const mapStateToProps = state => ({
	students: state.readingWorkshop.user.students
});

export default compose(
	requiresLogin(),
	connect(mapStateToProps)
) (Roster);
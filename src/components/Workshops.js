import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Workshops.css';
import MenuAppBar from './MenuAppBar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export function Workshops(props) {

	const workshopList = props.workshops
		.map((workshop, index) => {
			const studentList = workshop.students.map((student, index) => {
				return `${index?', ':''} ${student.firstName}`
			});
			return (
				<div key={index}>
					<ListItem
						button
						component={Link}
						to={`/workshops/${workshop.sessionNumber}`}
					>
						<ListItemText
							primary={`${workshop.date} ${workshop.book} ${workshop.pages}`}
							secondary={studentList}
						/>
					</ListItem>
					<Divider />
				</div>
			)
		});

	return (
		<div>
			<MenuAppBar pageTitle="Workshops" />
			<List>
				<ListItem button>
					<ListItemText primary="Create a new session..." />
				</ListItem>
				<Divider />
				{workshopList}
			</List>
		</div>
	);
}

const mapStateToProps = state => ({
	workshops: state.readingWorkshop.workshops,
	roster: state.readingWorkshop.roster
});

export default connect(mapStateToProps)(Workshops);
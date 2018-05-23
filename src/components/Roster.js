import React from 'react';
import {connect} from 'react-redux';
import RosterListItem from './RosterListItem';
import AddStudent from './AddStudent';
import MenuAppBar from './MenuAppBar';


export function Roster(props) {
	const {roster} = props;

	const rosterList = roster.map((student, index) => (
		<RosterListItem
			key={index}
			id={student._id}
			firstName={student.firstName}
			lastName= {student.lastName}
		/>
	));

	return (
		<div>
			<MenuAppBar pageTitle="Roster" />
			<AddStudent />
			{rosterList}
		</div>
	);
}

const mapStateToProps = state => ({
	roster: state.readingWorkshop.roster
});

export default connect(mapStateToProps)(Roster);
import React from 'react';
import {connect} from 'react-redux';
import RosterListItem from './RosterListItem';
import AddStudent from './AddStudent';

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
		<header>
			<h1>Roster</h1>
			<AddStudent />
			{rosterList}
		</header>
	);
}

const mapStateToProps = state => ({
	roster: state.roster
});

export default connect(mapStateToProps)(Roster);
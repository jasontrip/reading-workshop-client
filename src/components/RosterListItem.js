import React from 'react';
import './RosterListItem.css';

import RemoveRosterListItem from './RemoveRosterListItem';

export default function RosterListItem(props) {

	const {firstName, lastName} = props;

	return (
		<div className="roster-list-item">
			<RemoveRosterListItem />
			{firstName} {lastName}
		</div>
	)
}
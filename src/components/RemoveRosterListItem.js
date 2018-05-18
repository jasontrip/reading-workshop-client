import React from 'react';
import {connect} from 'react-redux';
import './RemoveRosterListItem.css';

import {removeStudent} from '../actions';

export function RemoveRosterListItem(props) {

	const onClick = id => {
		props.dispatch(removeStudent(id));
	}

	return (
		<div
			className="remove-roster-list-item"
			onClick={() => onClick(props.id)}
		>
			x
		</div>

	);
}

export default connect()(RemoveRosterListItem);	
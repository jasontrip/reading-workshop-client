import React from 'react';
import {connect} from 'react-redux';
import './Workshops.css';
import CreateWorkshop from './CreateWorkshop';
import WorkshopListItem from './WorkshopListItem';

export function Workshops(props) {

	const workshops = props.workshops
		.map((workshop, index) => {
			const studentsAttending = props.roster
				.filter(student => {
					return workshop.students.includes(student._id)
				});

			return (
				<WorkshopListItem
					key={index}
					id={workshop._id}
					date={workshop.date}
					book={workshop.book}
					pages={workshop.pages}
					students={studentsAttending}
				/>
			)
		});

	return (
		<div>
			<header>
				<h1>Workshops</h1>
			</header>
			<CreateWorkshop />
			{workshops}
		</div>
	);
}

const mapStateToProps = state => ({
	workshops: state.workshops,
	roster: state.roster
});

export default connect(mapStateToProps)(Workshops);
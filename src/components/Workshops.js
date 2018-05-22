import React from 'react';
import {connect} from 'react-redux';
import './Workshops.css';
import CreateWorkshop from './CreateWorkshop';
import WorkshopListItem from './WorkshopListItem';
import MenuAppBar from './MenuAppBar';

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
			<MenuAppBar pageTitle="Workshops" />
			<header>
				<h1>Workshops</h1>
			</header>
			<CreateWorkshop />
			{workshops}
		</div>
	);
}

const mapStateToProps = state => ({
	workshops: state.readingWorkshop.workshops,
	roster: state.readingWorkshop.roster
});

export default connect(mapStateToProps)(Workshops);
import React from 'react';
import './WorkshopListItem.css';

export default function WorkshopListItem(props) {
	const {date, book, pages, students} = props;

	function onClick() {
		console.log('click');
	}

	const studentList = students.map((student, index) => (
		<span key={index}>
			{index?', ':''} {student.firstName} {student.lastName}
		</span>
	));

	return (
		<div className="workshop" onClick={onClick}>
			<div>
				<div className="date">{date}</div>
				<div className="book">
					<div className="book-title">{book}</div>
					<div className="pages">{pages}</div>
				</div>
			</div>
			<div>
				{studentList}
			</div>
		</div>
	)
}
import React from 'react';
import './WorkshopForm.css';

export default function WorkshopForm(props) {
	return (
		<div className="workshop-form">
			<form>
				<label>Date</label>
				<input type="Date" />
				<div className="book">
					<label>Book</label>
					<input type="text" />
					<label className="pages">Pages</label>
					<input type="text" />
				</div>
				<div className="notes">
					<label>Notes</label>
					<textarea rows="8"></textarea>
				</div>
			</form>
		</div>
	)
}
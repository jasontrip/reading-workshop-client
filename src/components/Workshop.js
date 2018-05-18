import React from 'react';
import './Workshop.css';

import WorkshopForm from './WorkshopForm';

export default function Workshop(props) {

	return (
		<div className="workshop-screen">
			<header>
				<h1>Workshop</h1>
				<button>Save</button>
				<button>Delete</button>
			</header>

			<WorkshopForm />

			<div className="add-student-to-workshop">
				add a student...
			</div>
			<div className="student">Theo Johnson</div>
			<div className="student">Julissa Meyer</div>
			<div className="student">Jackie Appleseed</div>
		</div>
	)
}
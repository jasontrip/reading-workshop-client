import React from 'react';
import './LandingPage.css';

import CreateAccountForm from './CreateAccountForm';

export default function LandingPage(props) {
	return (
		<div>
			<header>
				<h1 className="landing-header">Readers Workshop</h1>
			</header>
			<section className="section">
				<p>
					You read with small groups of learners every day, but recording that information is hard! Readers Workshop will help!
				</p>
			</section>
			<section className="section">
				[screenshot here]
				<p>
					Create a workshop session and record session notes, what book you are working on, and what pages you covered. Add students to the session from your roster, and take notes for each student.
				</p>
			</section>
			<section className="section">
				[screenshot here]
				<p>
					Easily add and remove students from your roster.
				</p>
			</section>
			<section className="section">
				Create an account and start reading!
				<CreateAccountForm />
			</section>
		</div>
	);
}
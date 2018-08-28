import React from 'react';
import MenuAppBar from './MenuAppBar'
import BackgroundImagePath from '../images/library.jpg';

const landingHeader = {
	padding: '60px 10px 40px 10px',
	height: '450px',
	backgroundImage: `url(${BackgroundImagePath}`,
	color: 'white'
}

const	section = {
  minHeight: '200px',
  padding: '30px 15px',
  backgroundColor: '#bbb',
}

export default function LandingPage(props) {
	return (
		<div>
			<MenuAppBar pageTitle="Readers Workshop" />
			<header style={landingHeader}>
				<h1 >Readers Workshop</h1>
			</header>
			<section style={section}>
				<p>
					You read with small groups of learners every day, 
					but recording that information is hard! Readers Workshop will help!
				</p>
			</section>
			<section style={section}>
				[screenshot here]
				<p>
					Create a workshop session and record session notes, 
					what book you are working on, and what pages you covered. 
					Add students to the session from your roster, 
					and take notes for each student.
				</p>
			</section>
			<section style={section}>
				[screenshot here]
				<p>
					Easily add and remove students from your roster.
				</p>
			</section>
			<section style={section}>
				Create an account and start reading!
			</section>
		</div>
	);
}
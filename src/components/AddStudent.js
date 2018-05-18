import React from 'react';
import {connect} from 'react-redux';
import './AddStudent.css'

import {addStudent} from '../actions';

export class AddStudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
	}
	setEditing(editing) {
		this.setState({
			editing
		});
	}
	onSubmit(event) {
		event.preventDefault();
		this.setEditing(false);
		this.props.dispatch(
			addStudent(this.firstName.value, 
									this.lastName.value));
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="add-student"
					onClick={() => this.setEditing(true)}>
					<div className="add-student-text">
						add a student...
					</div>
				</div>
			);
		}

		return (
			<div className="add-student">
				<form onSubmit={e => this.onSubmit(e)}>
					<input
						type="text"
						placeholder="first name"
						className="firstName"
						ref={input => this.firstName = input}
						autoFocus
					/>
					<input
						type="text"
						placeholder="last name"
						className="lastName"
						ref={input => this.lastName = input}
					/>
					<button>add</button>
					<button onClick={() => this.setEditing(false)}>
						cancel
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddStudent);
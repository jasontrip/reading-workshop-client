import React from 'react';
import './AddStudent.css'

export default class AddStudent extends React.Component {
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

	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="add-student"
					onClick={() => this.setEditing(true)}>
					add a student...
				</div>
			);
		}

		return (
			<div className="add-student">
				<form onSubmit={(e) => this.onSubmit(e)}>
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
import React, { Component } from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import requiresLogin from './requiresLogin';
import MenuAppBar from './MenuAppBar';
import RosterList from './RosterList';
import StudentForm from './StudentForm';

export class Roster extends Component {
	constructor(props) {
		super(props);
		this.state = { editingStudent: null }
		this.editStudent = this.editStudent.bind(this);
	}

	editStudent(editingStudent) {
		this.setState({
			editingStudent,
		});
	}

	render() {
		const { students } = this.props;
		const { editingStudent } = this.state;

		return (
			<div>
				<MenuAppBar pageTitle="Roster" />
				{ 
					editingStudent
					?(<StudentForm
							editingStudent={ editingStudent }
							editStudent={ this.editStudent }
						/>
					 )
					:(<RosterList
							students={ students }
							editStudent={ this.editStudent }
						/>
					 )
				}
			</div>
		);
	} 
}

const mapStateToProps = state => ({
	students: state.user.students
});

export default compose(
	requiresLogin(),
	connect(mapStateToProps)
) (Roster);
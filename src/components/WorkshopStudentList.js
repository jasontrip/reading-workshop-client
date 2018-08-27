import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SelectStudentDialog from './SelectStudentDialog';

const styles = theme => ({
	root: {
		border: 'solid 1px',
	},
  button: {
    margin: theme.spacing.unit,
  },
});

class WorkshopStudentList extends Component {
	state = {
		openSelectStudentDialog: false,
	}

	handleClose = () => {
		this.setState({ openSelectStudentDialog: false });
	}

	handleRemoveStudent = (_id) => {
		this.props.onUpdateStudents(this.props.students.filter(s => s._id !== _id));
	}

	handleLookupStudent = () => {
		this.setState({ openSelectStudentDialog: true });
	}

	handleAddStudent = (student) => {
		this.setState({ openSelectStudentDialog: false });
		this.props.onUpdateStudents([ ...this.props.students, student ]);
	}

	render() {
		const { classes, students, listOfAvailableStudentsToAdd } = this.props;
		const { openSelectStudentDialog } = this.state;

		const studentChips = students.map((student, index) => (
			<Chip
				key={ index }
				label={ `${student.firstName} ${student.lastName}` }
				onDelete={ () => this.handleRemoveStudent(student._id) }
			/>
		));

		return (
			<div className={ classes.root } >
				{ studentChips }
				<Button
					variant="fab"
					mini
					color="secondary"
					className={ classes.button }
					onClick={ this.handleLookupStudent }
					disabled={ listOfAvailableStudentsToAdd.length === 0 }
				>
					<AddIcon />
				</Button>
				<SelectStudentDialog
					open={ openSelectStudentDialog }
					onClose={ this.handleClose }
					handleAddStudent={ this.handleAddStudent }
					listOfAvailableStudentsToAdd={ listOfAvailableStudentsToAdd }
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	const { students } = props;
	const listOfAvailableStudentsToAdd = state.user.students.slice(0);

	students.forEach(student =>
		listOfAvailableStudentsToAdd.splice(
			listOfAvailableStudentsToAdd.findIndex(s => s._id === student._id), 1));

	return ({
		listOfAvailableStudentsToAdd
	})
};

export default compose(
	connect(mapStateToProps),
	withStyles(styles)
)(WorkshopStudentList);
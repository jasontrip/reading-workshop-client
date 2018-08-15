import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {withStyles} from '@material-ui/core/styles';
import TextField from './TextField';
import {reduxForm, Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { updateStudent } from '../actions';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: '85px',
		padding: '0px 25px 25px 25px',
	},
	button: {
		marginTop: '20px',
	},
});

export function StudentForm(props) {
	const {studentId, classes, dispatch, handleSubmit, pristine, submitting, valid} = props;

	const onSubmit = (values) => {
		const _id = studentId;
		const updatedStudent = { _id, ...values };
		dispatch(updateStudent(updatedStudent));
	}

	return (
		<div className={classes.root} >
			<form onSubmit={handleSubmit(onSubmit)} >
				<Grid container justify="center" direction="row" spacing={40}>
					<Grid item>
						<Field
							name="firstName"
							label="first name"
							type="text"
							className="textField"
							component={TextField}
						/>
					</Grid>
					<Grid item>
						<Field
							name="lastName"
							label="last name"
							type="text"
							component={TextField}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" direction="row" spacing={8}>
					<Grid item>
						<Button
							className={classes.button}
							type="submit"
							color="primary"
							disabled={ pristine || submitting }
						>
							Save
						</Button>
					</Grid>
					<Grid item>
						<Button
							className={classes.button}
							type="submit"
							color="primary"
							disabled={ studentId?false:true }
						>
							Delete
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}

const mapStateToProps = (state, props) => {
	const { students } = state.readingWorkshop.user;
	const student = students.find(s => s._id === props.studentId);

	return {
		initialValues: {
			firstName: student.firstName || '',
			lastName: student.lastName || '',
		}
	}
};

export default compose(
	connect(mapStateToProps),
	reduxForm({ form: 'studentForm'} ),
	withStyles(styles)
) (StudentForm);
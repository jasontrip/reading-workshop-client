import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {withStyles} from '@material-ui/core/styles';
import TextField from './TextField';
import {reduxForm, Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { updateStudent, createStudent } from '../actions';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: '20px',
		padding: '0px 25px 25px 25px',
	},
	button: {
		marginTop: '20px',
	},
});

export function StudentForm(props) {
	const {editingStudent, editStudent, classes, dispatch, handleSubmit, pristine, submitting, valid} = props;

	const onSubmit = (values) => {
		const _id = editingStudent._id;
		if (_id) {
			const updatedStudent = { _id, ...values };
			dispatch(updateStudent(updatedStudent));			
		}
		dispatch(createStudent({ ...values }));
	}

	const onCancel = () => {
		editStudent(null);
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
							color="primary"
							onClick={ onCancel }
						>
							Cancel
						</Button>
					</Grid>
					<Grid item>
						<Button
							className={classes.button}
							type="submit"
							color="primary"
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
	const { editingStudent } = props;
	let firstName = '';
	let lastName = '';

	if (editingStudent) {
		firstName = editingStudent.firstName;
		lastName = editingStudent.lastName;
	}

	return {
		initialValues: {
			firstName: firstName,
			lastName: lastName,
		}
	}
};

export default compose(
	connect(mapStateToProps),
	reduxForm({ form: 'studentForm'} ),
	withStyles(styles)
) (StudentForm);
import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import TextField from './TextField';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import { editWorkshop } from '../actions/workshops';
import { createWorkshop, updateWorkshop, deleteWorkshop } from '../actions/user';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formGrid: {
  	padding: '25px',
  },
  textField: {
  	width: '100%',
  },
  workshopTextField: {
  	backgroundColor: '#e8e8e8',
  },
  notesField: {
  	width: '100%',
  },
  button: {
		marginTop: '20px',
	},
});

export function WorkshopForm(props) {
	const { currentWorkshop, dispatch, classes, handleSubmit, pristine, submitting, valid } = props;

	const onSubmit = (values) => {
		if (currentWorkshop?Object.keys(currentWorkshop).length === 0:false) {
			dispatch(createWorkshop({ ...values }));
		} else {
			const { _id } = currentWorkshop;
			const updatedWorkshop = { _id, ...values };
			dispatch(updateWorkshop(updatedWorkshop));
		}
	}

	const onCancel = (event) => {
		event.preventDefault();
		dispatch(editWorkshop(null));
	}

	const onDelete = (event) => {
		event.preventDefault();
		dispatch(deleteWorkshop(currentWorkshop._id));
	}

	return (
		<div className={classes.root}>
			<div className={classes.formGrid}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container justify="center" direction="row" spacing={24}>
						<Grid item xs={4}>
							<Field
								name="date"
								label="date"
								type="date"
								className={classes.textField}
								component={TextField}
								InputLabelProps={{
									shrink: true
								}}
								InputProps={{
				          disableUnderline: false,
				          className: classes.workshopTextField,
				        }}
								validate={ [required, nonEmpty] }
							/>
						</Grid>
						<Grid item xs={6}>
							<Field
								name="book"
								label="book"
								type="text"
								InputProps={{
				          disableUnderline: false,
				          className: classes.workshopTextField,
				        }}
								className={classes.textField}
								component={TextField}
								validate={[required, nonEmpty]}
							/>
						</Grid>
						<Grid item xs={2}>
							<Field
								name="pages"
								label="pages"
								type="text"
								InputProps={{
				          disableUnderline: false,
				          className: classes.workshopTextField,
				        }}
								className={classes.textField}
								component={TextField}
							/>
						</Grid>
						<Grid item xs={12}>
							<Field
								name="notes"
								label="notes"
								type="text"
								InputProps={{
				          disableUnderline: false,
				          className: classes.workshopTextField,
				        }}
								className={classes.notesField}
								multiline={true}
								component={TextField}
							/>
						</Grid>
					</Grid>
					<Button
						className={ classes.button }
						type="submit"
						color="primary"
						disabled={ pristine || submitting || !valid }
					>
						Save
					</Button>
					<Button
						className={ classes.button }
						color="primary"
						onClick={ event => onCancel(event) }
					>
						Cancel
					</Button>
					<Button
						className={ classes.button }
						color="primary"
						onClick={ event => onDelete(event)}
						disabled={ currentWorkshop?Object.keys(currentWorkshop).length === 0:false }
					>
						Delete
					</Button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	const { currentWorkshop } = props;
	let initialValues;

	if (currentWorkshop) {
		const { date, book, pages, notes } = currentWorkshop;
		initialValues = {
			date: moment(date).format('YYYY-MM-DD'),
			book, pages, notes
		}
	}

		return {
			initialValues
		}
};


export default compose(
	connect(mapStateToProps),
	reduxForm({form: 'workshopForm'}),
	withStyles(styles)
) (WorkshopForm);







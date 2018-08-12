import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import DialogAppBar from './DialogAppBar';
import TextField from './TextField';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Button from '@material-ui/core/Button';

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
});

function onSubmit(values) {
	console.log(values);
}

export function WorkshopForm(props) {
	const {classes, handleSubmit, pristine, submitting, valid} = props;

	return (
		<div className={classes.root}>
			<DialogAppBar
				dialogTitle="Workshop"
				onSubmit={handleSubmit(onSubmit)}
				pristine={pristine}
				submitting={submitting}
				valid={valid}
			/>
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
								validate={[required, nonEmpty]}
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
					<Button type="submit" color="primary">see</Button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
		return {
			initialValues: {
				date: moment(ownProps.workshop.date).format('YYYY-MM-DD'),
				book: ownProps.workshop.book,
				pages: ownProps.workshop.pages,
				notes: ownProps.workshop.notes
			}
		}
};


export default compose(
	connect(mapStateToProps),
	reduxForm({form: 'workshopForm'}),
	withStyles(styles)
) (WorkshopForm);







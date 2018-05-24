import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import DialogAppBar from './DialogAppBar';
import TextField from './TextField';
import {withStyles} from '@material-ui/core/styles';
import './WorkshopForm.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  notesField: {
  	marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  	width: 400,
  }
});

function onSubmit(values) {
	console.log(values);
}

export function WorkshopForm(props) {
	const {classes, handleSubmit, pristine, submitting, valid} = props;
	console.log(props);

	return (
		<div className="workshop-form">
			<form>
				<DialogAppBar
					dialogTitle="Workshop"
					onSubmit={handleSubmit(onSubmit)}
					pristine={pristine}
					submitting={submitting}
					valid={valid} />
				<Field
					name="date"
					label="date"
					type="date"
					className={classes.textField}
					component={TextField}
					InputLabelProps={{
						shrink: true
					}}
					validate={[required, nonEmpty]} />
				<div className="book">
					<Field
						name="book"
						label="book"
						type="text"
						className={classes.textField}
						component={TextField}
						validate={[required, nonEmpty]} />
					<Field
						name="pages"
						label="pages"
						type="text"
						className={classes.textField}
						component={TextField} />
				</div>
				<div className="notes">
					<Field
						name="notes"
						label="notes"
						type="text"
						className={classes.notesField}
						multiline={true}
						component={TextField}
					/>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
		return {
			initialValues: {
				date: ownProps.workshop.date,
				book: ownProps.workshop.book,
				pages: ownProps.workshop.pages,
				notes: ownProps.workshop.notes
			}
		}
};


export default connect(mapStateToProps)(
	reduxForm({form: 'workshopForm'})(
		withStyles(styles)(WorkshopForm)
	)
);







import React from 'react';
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
    width: 130,
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
					value="2017-05-24"
					className={classes.textField}
					component={TextField}
					InputLabelProps={{
						shrink: true
					}}
					validate={[required, nonEmpty]} />
				<div className="book">
					<Field
						name="bookName"
						label="book"
						type="text"
						className={classes.textField}
						component={TextField}
						validate={[required, nonEmpty]} />
					<Field
						name="bookPagesRead"
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

export default reduxForm({
	form: 'workshopForm'
})(withStyles(styles)(WorkshopForm));
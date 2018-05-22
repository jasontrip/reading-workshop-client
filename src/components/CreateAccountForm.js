import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './CreateAccountForm.css';

import Button from '@material-ui/core/Button';
import {required, nonEmpty, email, noWhitespace} from '../validators';

import TextField from './TextField';

export function CreateAccountForm(props) {
	const {handleSubmit, pristine, submitting, valid} = props;

	const onSubmit = (values) => {
		console.log(values);
	}


	return (
		<form
			onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Field
					name="email"
					label="email"
					component={TextField}
					validate={[required, nonEmpty, email, noWhitespace]}/>
			</div>
			<div>
				<Field
					name="password"
					label="password"
					type="text"
					component={TextField}
					validate={[required, nonEmpty, noWhitespace]}
				/>
			</div>
			<div>
				<Button
					type="submit"
					variant="raised"
					disabled={pristine || submitting || !valid} >
        	Sign up!
      	</Button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'createAccount'
})(CreateAccountForm);
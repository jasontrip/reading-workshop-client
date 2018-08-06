import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './UsernameAndPasswordForm.css';

import Button from '@material-ui/core/Button';

import TextField from './TextField';

export function UsernameAndPasswordForm(props) {
	const {handleSubmit, pristine, submitting, valid} = props;

	const onSubmit = (values) => {
		const { username, password } = values;

		return props.onSubmit(username, password);
	}


	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			open={ props.open }
		>
			<div>
				<Field
					className="username"
					name="username"
					label="email"
					component={TextField}
					validate={ props.validateUsername }
					disabled={ submitting }
				/>
			</div>
			<div>
				<Field
					className="password"
					name="password"
					label="password"
					type="text"
					component={TextField}
					validate={ props.validatePassword }
					disabled={ submitting }
				/>
			</div>
			<br />
			<div>
				<Button
					className="button"
					type="submit"
					variant="raised"
					disabled={ pristine || submitting || !valid } >
        	{ props.buttonText }
      	</Button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'UsernameAndPasswordForm'
})(UsernameAndPasswordForm);
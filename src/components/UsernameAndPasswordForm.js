import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from './TextField';

export function UsernameAndPasswordForm(props) {
	const {handleSubmit, pristine, submitting, valid} = props;

	const onSubmit = (values) => {
		const { username, password } = values;

		return props.onSubmit(username, password);
	}

	const textWidth = {
		width: '300px',
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			open={ props.open }
		>
			<div>
				<Field
					style={ textWidth }
					name="username"
					label="email"
					component={ TextField }
					validate={ props.validateUsername }
					disabled={ submitting }
				/>
			</div>
			<div>
				<Field
					style={ textWidth }
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
					style={ textWidth }
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
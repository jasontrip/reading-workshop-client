import React from 'react';

import TextField from '@material-ui/core/TextField';

export default function WrappedTextField(props) {
	const {label, meta: {touched, error, warning}, input, ...custom} = props;

	const helperText = error && touched?error:(warning && touched?warning:'');

	return (
		<TextField
			label={label}
			error={error && touched?true:false}
			helperText={helperText}
			{...input}
			{...custom} />
	)
}
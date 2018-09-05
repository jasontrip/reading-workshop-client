import React from 'react';

import TextField from '@material-ui/core/TextField';

export function WrappedTextField(props) {
  const {
    label, meta: { touched, error, warning }, input, ...custom
  } = props;

  const helperText = touched ? (error || warning) : '';

  return (
    <TextField
      label={label}
      error={(error && touched)}
      helperText={helperText}
      {...input}
      {...custom}
    />
  );
}

export default WrappedTextField;

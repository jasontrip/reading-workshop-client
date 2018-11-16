import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from './TextField';

export function UsernameAndPasswordForm(props) {
  const {
    onSubmit, handleSubmit, demoUser, demoPassword,
    pristine, submitting, valid, buttonText, validateUsername, validatePassword,
  } = props;

  const submit = (values) => {
    const { username, password } = values;

    return onSubmit(username, password);
  };

  const textWidth = {
    maxWidth: '300px',
    width: '95%',
    marginBottom: '10px',
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
    >
      <div>
        <Field
          style={textWidth}
          name="username"
          label="email"
          component={TextField}
          validate={validateUsername}
          disabled={submitting}
        />
        {demoUser ? `demo: ${demoUser}` : ''}
      </div>
      <div>
        <Field
          style={textWidth}
          name="password"
          label="password"
          type="text"
          component={TextField}
          validate={validatePassword}
          disabled={submitting}
        />
        {demoUser ? `demo: ${demoPassword}` : ''}
      </div>
      <br />
      <div>
        <Button
          style={textWidth}
          type="submit"
          variant="raised"
          disabled={pristine || submitting || !valid}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

UsernameAndPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validateUsername: PropTypes.array.isRequired,
  validatePassword: PropTypes.array.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  demoUser: PropTypes.string.isRequired,
  demoPassword: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'UsernameAndPasswordForm',
})(UsernameAndPasswordForm);

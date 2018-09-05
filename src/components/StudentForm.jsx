import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm, Field } from 'redux-form';
import { Paper, Grid, Button } from '@material-ui/core';
import { required, nonEmpty } from '../validators';
import TextField from './TextField';
import { updateStudent, createStudent, deleteStudent } from '../actions/user';

const styles = {
  root: {
    maxWidth: '400px',
    marginTop: '35px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    marginTop: '20px',
  },
};

export function StudentForm(props) {
  const {
    editingStudent, editStudent, classes, dispatch, handleSubmit, pristine, submitting, valid,
  } = props;

  const onSubmit = (values) => {
    const { _id } = editingStudent;
    if (_id) {
      const updatedStudent = { _id, ...values };
      dispatch(updateStudent(updatedStudent));
    } else {
      dispatch(createStudent({ ...values }));
    }
  };

  const onCancel = (event) => {
    event.preventDefault();
    editStudent(null);
  };

  const onDelete = (event) => {
    event.preventDefault();
    dispatch(deleteStudent(editingStudent._id));
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify="center" direction="row" spacing={40}>
          <Grid item>
            <Field
              name="firstName"
              label="first name"
              type="text"
              className="textField"
              component={TextField}
              validate={[required, nonEmpty]}
            />
          </Grid>
          <Grid item>
            <Field
              name="lastName"
              label="last name"
              type="text"
              component={TextField}
              validate={[required, nonEmpty]}
            />
          </Grid>
        </Grid>
        <Grid container justify="center" direction="row" spacing={8}>
          <Grid item>
            <Button
              className={classes.button}
              type="submit"
              color="primary"
              disabled={pristine || submitting || !valid}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              onClick={event => onCancel(event)}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              onClick={event => onDelete(event)}
              disabled={editingStudent ? Object.keys(editingStudent).length === 0 : false}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

StudentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  editingStudent: PropTypes.object.isRequired,
  editStudent: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => {
  const { editingStudent } = props;

  return {
    initialValues: {
      firstName: editingStudent ? editingStudent.firstName : '',
      lastName: editingStudent ? editingStudent.lastName : '',
    },
  };
};

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'studentForm' }),
  withStyles(styles),
)(StudentForm);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { required, nonEmpty } from '../validators';
import TextField from './TextField';
import WorkshopStudentList from './WorkshopStudentList';
import { createWorkshop, updateWorkshop, deleteWorkshop } from '../actions/user';

const styles = {
  root: {
    maxWidth: '500px',
    marginTop: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formGrid: {
    padding: '25px',
  },
  textField: {
    width: '100%',
  },
  workshopTextField: {
  },
  notesField: {
    width: '100%',
  },
  button: {
    marginTop: '20px',
  },
};

export class WorkshopForm extends Component {
  constructor(props) {
    super(props);
    const { editingWorkshop } = this.props;

    if (editingWorkshop ? Object.keys(editingWorkshop).length > 0 : false) {
      this.state = {
        noChangeInStudents: true,
        students: [...editingWorkshop.students],
      };
    } else {
      this.state = {
        noChangeInStudents: true,
        students: [],
      };
    }
  }

  onSubmit = (values) => {
    const { dispatch, editingWorkshop } = this.props;
    const { students } = this.state;

    this.setState({ noChangeInStudents: true });

    if (editingWorkshop ? Object.keys(editingWorkshop).length === 0 : false) {
      return dispatch(createWorkshop({ ...values, students }));
    }

    const { _id } = editingWorkshop;
    const updatedWorkshop = { _id, ...values, students };
    return dispatch(updateWorkshop(updatedWorkshop));
  }

  onUpdateStudents = (updatedStudents) => {
    this.setState({
      noChangeInStudents: false,
      students: updatedStudents,
    });
  }

  onCancel = (event) => {
    event.preventDefault();
    const { editWorkshop } = this.props;
    editWorkshop(null);
  }

  onDelete = (event) => {
    event.preventDefault();
    const { editingWorkshop, dispatch } = this.props;
    dispatch(deleteWorkshop(editingWorkshop._id));
  }

  render() {
    const { editingWorkshop, classes, handleSubmit } = this.props;
    const { pristine, submitting, valid } = this.props;
    const { students, noChangeInStudents } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.formGrid}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Grid container justify="center" direction="row" spacing={24}>
              <Grid item xs={5}>
                <Field
                  name="date"
                  label="date"
                  type="date"
                  className={classes.textField}
                  component={TextField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    disableUnderline: false,
                    className: classes.workshopTextField,
                  }}
                  validate={[required, nonEmpty]}
                />
              </Grid>
              <Grid item xs={5}>
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
                  multiline
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <WorkshopStudentList
                  students={students}
                  onUpdateStudents={this.onUpdateStudents}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  type="submit"
                  color="primary"
                  disabled={(pristine && noChangeInStudents) || submitting || !valid}
                >
                  Save
                </Button>
                <Button
                  className={classes.button}
                  color="primary"
                  onClick={event => this.onCancel(event)}
                >
                  Cancel
                </Button>
                <Button
                  className={classes.button}
                  color="primary"
                  onClick={event => this.onDelete(event)}
                  disabled={editingWorkshop ? Object.keys(editingWorkshop).length === 0 : false}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    );
  }
}

WorkshopForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  editWorkshop: PropTypes.func.isRequired,
  editingWorkshop: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => {
  const { editingWorkshop } = props;

  return {
    initialValues: {
      date: editingWorkshop ? moment(editingWorkshop.date).format('YYYY-MM-DD') : '',
      book: editingWorkshop ? editingWorkshop.book : '',
      pages: editingWorkshop ? editingWorkshop.pages : '',
      notes: editingWorkshop ? editingWorkshop.notes : '',
    },
  };
};

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'workshopForm' }),
  withStyles(styles),
)(WorkshopForm);

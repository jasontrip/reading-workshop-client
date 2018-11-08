import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SelectStudentDialog from './SelectStudentDialog';

const styles = theme => ({
  root: {
    border: 'solid 1px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    marginRight: '7px',
  },
});

export class WorkshopStudentList extends Component {
  state = {
    openSelectStudentDialog: false,
  }

  handleClose = () => {
    this.setState({ openSelectStudentDialog: false });
  }

  handleRemoveStudent = (_id) => {
    const { onUpdateStudents, students } = this.props;
    onUpdateStudents(students.filter(s => s._id !== _id));
  }

  handleLookupStudent = () => {
    this.setState({ openSelectStudentDialog: true });
  }

  handleAddStudent = (student) => {
    const { onUpdateStudents, students } = this.props;
    this.setState({ openSelectStudentDialog: false });
    onUpdateStudents([...students, student]);
  }

  render() {
    const { classes, students, listOfAvailableStudentsToAdd } = this.props;
    const { openSelectStudentDialog } = this.state;

    const studentChips = students.map((student, index) => (
      <Chip
        key={index}
        label={`${student.firstName} ${student.lastName}`}
        onDelete={() => this.handleRemoveStudent(student._id)}
        className={classes.chip}
      />
    ));

    return (
      <div className={classes.root}>
        { studentChips }
        <Button
          variant="fab"
          mini
          color="secondary"
          className={classes.button}
          onClick={this.handleLookupStudent}
          disabled={listOfAvailableStudentsToAdd.length === 0}
        >
          <AddIcon />
        </Button>
        <SelectStudentDialog
          open={openSelectStudentDialog}
          onClose={this.handleClose}
          handleAddStudent={this.handleAddStudent}
          listOfAvailableStudentsToAdd={listOfAvailableStudentsToAdd}
        />
      </div>
    );
  }
}

WorkshopStudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  listOfAvailableStudentsToAdd: PropTypes.array.isRequired,
  onUpdateStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const { students } = props;
  const listOfAvailableStudentsToAdd = state.user.students.slice(0);

  students.forEach((student) => {
    const indexToRemove = listOfAvailableStudentsToAdd.findIndex(s => s._id === student._id);
    listOfAvailableStudentsToAdd.splice(indexToRemove, 1);
  });

  return ({ listOfAvailableStudentsToAdd });
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(WorkshopStudentList);

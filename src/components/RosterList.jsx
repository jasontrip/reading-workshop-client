import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Face as FaceIcon, Add as AddIcon } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { toggleLoginOrRegisterDialogOpen } from '../actions/ui';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    float: 'right',
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 2,
  },
});

export function RosterList(props) {
  const { students, classes, editStudent, loggedIn, dispatch } = props;

  const onClick = (student) => {
    editStudent(student);
  };

  const studentList = students.map((student, index) => (
    <div key={index}>
      <ListItem
        button
        divider
        onClick={() => onClick(student)}
      >
        <FaceIcon />
        <ListItemText
          primary={`${student.firstName} ${student.lastName}`}
        />
      </ListItem>
    </div>
  ));

  if (!loggedIn) {
    dispatch(toggleLoginOrRegisterDialogOpen(true));
  }

  return (
    <div>
      <List>{ studentList }</List>
      {(loggedIn
        ? (
          <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            className={classes.button}
          >
            <AddIcon onClick={() => editStudent({})} />
          </Button>
        )
        : ''
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

RosterList.propTypes = {
  classes: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  editStudent: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(RosterList);

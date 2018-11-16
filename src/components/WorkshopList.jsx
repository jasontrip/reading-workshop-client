import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { toggleLoginOrRegisterDialogOpen } from '../actions/ui';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    position: 'fixed',
    top: theme.spacing.unit * 2,
    right: theme.spacing.unit * 9,
  },
});

export function WorkshopList(props) {
  const { workshops, editWorkshop, classes, loggedIn, dispatch } = props;

  const workshopList = workshops.map((workshop, index) => {
    const workshopDate = moment(workshop.date).format('MMM Do');
    const studentList = workshop.students.map((student, studentIndex) => {
      const nameAndComma = `${studentIndex ? ', ' : ''} ${student.firstName} ${student.lastName}`;
      return nameAndComma;
    }).join('');
    return (
      <div key={index}>
        <ListItem
          button
          divider
          onClick={() => editWorkshop(workshop)}
        >
          <ListItemText
            primary={`${workshopDate} ${workshop.book}`}
            secondary={studentList}
          />
        </ListItem>
      </div>
    );
  });

  if (!loggedIn) {
    dispatch(toggleLoginOrRegisterDialogOpen(true));
  }

  return (
    <div>
      <List>
        {workshopList}
      </List>
      {loggedIn
        ? (
          <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
            <AddIcon onClick={() => editWorkshop({})} />
          </Button>
        )
        : ""
      }

    </div>
  );
}

WorkshopList.propTypes = {
  workshops: PropTypes.array.isRequired,
  editWorkshop: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  workshops: state.user.workshops,
  loggedIn: state.user.loggedIn,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(WorkshopList);

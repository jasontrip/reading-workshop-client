import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar';
import requiresLogin from './requires-login';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

export function Workshops(props) {
	const { classes } = props;

	const workshopList = props.workshops
		.map((workshop, index) => {
			const workshopDate = moment(workshop.date).format('MMM Do');
			const studentList = workshop.students.map((student, index) => {
				return `${index?', ':''} ${student.firstName} ${student.lastName}`
			}).join('');
			return (
				<div key={index}>
					<ListItem
						button
						component={Link}
						to={`/workshops/${workshop._id}`}
					>
						<ListItemText
							primary={`${workshopDate} ${workshop.book}`}
							secondary={studentList}
						/>
					</ListItem>
					<Divider />
				</div>
			)
		});

	return (
		<div>
			<MenuAppBar pageTitle="Workshops" />
			<List>
				{workshopList}
			</List>
			<Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
		</div>
	);
}

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	workshops: state.readingWorkshop.user.workshops,
	roster: state.readingWorkshop.user.roster
});

export default compose(
	requiresLogin(),
	withStyles(styles),
	connect(mapStateToProps)
) (Workshops);
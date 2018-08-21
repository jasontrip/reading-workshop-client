import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar';
import requiresLogin from './requiresLogin';
import { editWorkshop } from '../actions/workshops';

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

class Workshops extends React.Component {

	newWorkshop = () => {
		this.props.dispatch(editWorkshop({}));
	}

	render() {
		const { dispatch, classes, workshops } = this.props;
		const { workshopId } = this.props.match.params;

		// put in component will mount
		if (workshops && workshopId) {
			const currentWorkshop = workshops.find(w => w._id === workshopId);
			dispatch(editWorkshop(currentWorkshop));
		}

		let workshopList = '';
		if (workshops) {
			workshopList = workshops.map((workshop, index) => {
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
		}

		return (
			<div>
				<MenuAppBar pageTitle="Workshops" />
				<List>
					{workshopList}
				</List>
				<Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
	        <AddIcon onClick={ this.newWorkshop } />
	      </Button>
			</div>
		);
	}

}

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	workshops: state.user.workshops,
	roster: state.user.roster
});

export default compose(
	requiresLogin(),
	withStyles(styles),
	connect(mapStateToProps)
) (Workshops);
import React, { Component } from 'react';
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
});

class WorkshopStudentList extends Component {
	state = {
		openSelectStudentDialog: false,
		newStudentList: this.props.students,
	}

	handleClose = () => {
		this.setState({ openSelectStudentDialog: false });
	}

	handleLookupStudent = () => {
		this.setState({ openSelectStudentDialog: true });
	}

	handleAddStudent = (student) => {
		this.setState({
			openSelectStudentDialog: false,
			newStudentList: [...this.state.newStudentList, student],
		}, () => console.log(this.state));
	}

	render() {
		const { classes } = this.props;
		const { openSelectStudentDialog } = this.state;

		return (
			<div className={ classes.root } >
				<Chip
					label="Jason Trip"
					onDelete={ this.handleClose }
				/>
				<Button
					variant="fab"
					mini
					color="secondary"
					className={ classes.button }
					onClick={ this.handleLookupStudent }
				>
					<AddIcon />
				</Button>
				<SelectStudentDialog
					open={ openSelectStudentDialog }
					onClose={ this.handleClose }
					onAddStudent={ this.handleAddStudent } 
				/>
			</div>
		)
	}

}

export default withStyles(styles)(WorkshopStudentList);
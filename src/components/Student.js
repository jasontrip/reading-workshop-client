import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import StudentForm from './StudentForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export function Student(props) {
	const { studentId } = props.match.params;

	return (
		<div>
			<AppBar>
				<Toolbar>
					<IconButton aria-label="Close">
						<Link to="/roster">
							<CloseIcon color="secondary" />
						</Link>
					</IconButton>
					Edit Student
				</Toolbar>
			</AppBar>
			<StudentForm studentId={ studentId } />
		</div>
	);
}

export default requiresLogin()(Student);
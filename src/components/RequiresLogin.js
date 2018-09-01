import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => Component => {
	const styles = theme => ({
	  root: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: '100vh'
	  },

	});

	function RequiresLogin(props) {
		const { loading, loggedIn, classes, ...passThroughProps } = props;

		if (loading) {
			return (
				<Grid
				  container
				  className={classes.root}
				  direction="row"
				>
					<Grid item>
						<CircularProgress size={100} />
					</Grid>
				</Grid>
			);
		}

		if (!loggedIn) {
			return <Redirect to="/" />;
		}

		return <Component { ...passThroughProps } />;
	}

	const mapStateToProps = (state, props) => ({
		loading: state.ui.loading,
		loggedIn: state.user.workshops !== null,
	});

	return compose(
		withStyles(styles),
		connect(mapStateToProps)
	)(RequiresLogin);
}
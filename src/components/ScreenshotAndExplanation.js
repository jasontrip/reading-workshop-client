import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
	root: {
		maxWidth: '500px',
		margin: '75px auto 75px auto',
	},
	image: {
		width: '100%',
	}
}

export function ScreenshotAndExplanation(props) {
	const { classes, imagePath, alt, text } = props;

	return (
		<div className={ classes.root } >
			<img className={ classes.image } src={ imagePath } alt={ alt } />
			<div>
				<Typography variant="subheading" align="center">
					{ text }
				</Typography>
			</div>
		</div>
	);
}

export default withStyles(styles)(ScreenshotAndExplanation);
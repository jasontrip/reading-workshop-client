import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    maxWidth: '500px',
    margin: '75px auto 75px auto',
  },
  image: {
    width: '100%',
  },
};

export function ScreenshotAndExplanation(props) {
  const {
    classes, imagePath, alt, text,
  } = props;

  return (
    <div className={classes.root}>
      <img className={classes.image} src={imagePath} alt={alt} />
      <div>
        <Typography variant="subheading" align="center">
          { text }
        </Typography>
      </div>
    </div>
  );
}

ScreenshotAndExplanation.propTypes = {
  classes: PropTypes.object.isRequired,
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(ScreenshotAndExplanation);

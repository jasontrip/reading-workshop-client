import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (Component) => {
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
  };

  function RequiresLogin(props) {
    const {
      loading, classes, ...passThroughProps
    } = props;

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

    return <Component {...passThroughProps} />;
  }

  const mapStateToProps = state => ({
    loading: state.ui.loading,
  });

  return compose(
    withStyles(styles),
    connect(mapStateToProps),
  )(RequiresLogin);
};

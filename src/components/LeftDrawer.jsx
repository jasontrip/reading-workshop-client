import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer, Button, Typography, List, ListItem, ListItemText, Divider,
} from '@material-ui/core';

const styles = {
  title: {
    margin: '30px auto 30px auto',
    width: '270px',
  },
  drawer: {
    width: '300px',
    a: {
      textDecoration: 'none',
      color: 'none',
    },
  },
};

export class LeftDrawer extends React.Component {
  render() {
    const { classes, open, onClick } = this.props;

    return (
      <Drawer
        open={open}
        onClick={onClick}
      >
        <div className={classes.drawer}>
          <div className={classes.title}>
            <Button component={Link} to="/">
              <Typography variant="headline">
                Reading Workshop
              </Typography>
            </Button>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              component={Link}
              to="/Workshops"
            >
              <ListItemText primary="Workshops" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Roster"
            >
              <ListItemText primary="Roster" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(LeftDrawer);

import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Drawer, Button, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

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
}

class MenuAppBar extends React.Component {

	render() {
		const { classes } = this.props;

		return (
	    <Drawer
	    	open={this.props.open}
	    	onClick={this.props.onClick}
	    >
	      <div className={classes.drawer}>
	        <div className={ classes.title } >
	        	<Button component={Link} to="/">
		          <Typography variant="headline">
		            Reading Workshop
		          </Typography>
		        </Button>
	        </div>
	        <Divider />
	        <List>
	          <ListItem button
	            component={Link}
	            to="/Workshops"
	          >
	            <ListItemText primary="Workshops" />
	          </ListItem>
	          <ListItem button
	            component={Link}
	            to="/Roster"
	          >
	            <ListItemText primary="Roster" />
	          </ListItem>
	        </List>
	      </div>
	    </Drawer>
		)
	}

}

export default withStyles(styles)(MenuAppBar);
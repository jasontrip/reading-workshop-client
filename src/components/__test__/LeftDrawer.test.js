import React from 'react';
import { shallow } from 'enzyme';
import {LeftDrawer} from '../LeftDrawer';
import { Drawer, Button, List, ListItem } from '@material-ui/core';

describe('<LeftDrawer />', () => {

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

	it('Shallow renders a Drawer, with a List and at least two ListItems', () => {
    const wrapper = shallow(<LeftDrawer classes={styles} />);
    expect(wrapper.find(Drawer).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(ListItem).length).toBeGreaterThan(1);
  });

  it('Renders one List and more than one ListItems', () => {
    const wrapper = shallow(<LeftDrawer classes={styles} />);
    expect(wrapper.find(List).length).toEqual(1);
    expect(wrapper.find(ListItem).length).toBeGreaterThan(1);
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { TopAppBar } from '../TopAppBar';

describe('<TopAppBar />', () => {

	const styles = {
	  root: {
	    flexGrow: 1,
	  },
	  flex: {
	    flex: 1,
	  },
	  menuButton: {
	    marginLeft: -12,
	    marginRight: 20,
	  },
	};

	const props = {
		classes: styles,
	}

	it('Shallow renders', () => {
    const wrapper = shallow(<TopAppBar { ...props } />);
  });

});
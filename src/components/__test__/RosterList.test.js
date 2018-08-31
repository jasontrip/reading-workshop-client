import React from 'react';
import { shallow } from 'enzyme';
import { RosterList } from '../RosterList';
import { ListItem } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Add as AddIcon } from '@material-ui/icons';



describe('<RosterList />', () => {

	const styles = {
	  button: {
	    margin: '',
	    position: 'absolute',
	    bottom: '',
	    right: '',
	  },
	};

	const callback = jest.fn();

	const props = {
		classes: styles,
		students: [{ firstName: 'testFirst', lastName: 'testLast'}],
		editStudent: callback,
	}

	it('Shallow renders', () => {
    const wrapper = shallow(<RosterList { ...props } />);
    expect(wrapper.find(ListItem).length).toEqual(1);
    // expect(wrapper.find(RosterList).length).toEqual(1);
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { StudentForm } from '../StudentForm';

describe('<StudentForm />', () => {

	const styles = {
	  root: {
	    maxWidth: '400px',
	    marginTop: '35px',
	    marginLeft: 'auto',
	    marginRight: 'auto'
	  },
		button: {
			marginTop: '20px',
		},		
	}
	const callback = jest.fn();

	const props = {
		editingStudent: {},
		editStudent: callback,
		classes: styles,
		dispatch: callback,
		handleSubmit: callback,
		pristine: true,
		submitting: true,
		valid: true,
	}

	it('Shallow renders', () => {
    const wrapper = shallow(<StudentForm { ...props } />);
  });

});
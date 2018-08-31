import React from 'react';
import { shallow } from 'enzyme';
import { WrappedTextField } from '../TextField';

describe('<WrappedTextField />', () => {
	const props = {
		label: '',
		meta: {
			touched: true,
			error: false,
			warning: '',
		},
		input: '',
	};

	it('Shallow renders', () => {
    const wrapper = shallow(<WrappedTextField { ...props } />);
  });

});
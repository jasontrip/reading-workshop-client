import React from 'react';
import { shallow } from 'enzyme';
import { SelectStudentDialog } from '../SelectStudentDialog';

describe('<SelectStudentDialog />', () => {

	const callback = jest.fn();

	const props = {
		open: true,
		listOfAvailableStudentsToAdd: [{ firstName: 'testFirst', lastName: 'testLast'}],
		onClose: callback,
		handleAddStudent: callback,
	}

	it('Shallow renders', () => {
    const wrapper = shallow(<SelectStudentDialog { ...props } />);
  });

});
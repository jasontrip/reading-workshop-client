import React from 'react';
import { shallow } from 'enzyme';
import { WorkshopStudentList } from '../WorkshopStudentList';

describe('<WorkshopStudentList />', () => {

  const styles = {
    root: {
      border: 'solid 1px',
    },
    button: {
      margin: '',
    },
  };
  
  const callback = jest.fn();

  const props = {
    classes: styles,
    students: [],
    listOfAvailableStudentsToAdd: [],
  }

  it('Shallow renders', () => {
    const wrapper = shallow(<WorkshopStudentList { ...props } />);
  });

});
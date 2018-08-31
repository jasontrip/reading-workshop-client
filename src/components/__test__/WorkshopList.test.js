import React from 'react';
import { shallow } from 'enzyme';
import { WorkshopList } from '../WorkshopList';

describe('<WorkshopList />', () => {

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
    editWorkshop: callback,
    classes: styles,
    workshops: [],
  }

  it('Shallow renders', () => {
    const wrapper = shallow(<WorkshopList { ...props } />);
  });

});
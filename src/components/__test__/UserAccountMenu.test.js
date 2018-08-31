import React from 'react';
import { shallow } from 'enzyme';
import { UserAccountMenu } from '../UserAccountMenu';

describe('<UserAccountMenu />', () => {

  const props = {
    loggedIn: true,
    showLoginOrRegisterDialog: true,
  }

  it('Shallow renders', () => {
    const wrapper = shallow(<UserAccountMenu { ...props } />);
  });

});
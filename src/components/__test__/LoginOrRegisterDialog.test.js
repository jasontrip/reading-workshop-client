import React from 'react';
import { shallow } from 'enzyme';
import { LoginOrRegisterDialog } from '../LoginOrRegisterDialog';
import { Tabs, Tab } from '@material-ui/core';
import UsernameAndPasswordForm from '../UsernameAndPasswordForm';

describe('<LoginOrRegisterDialog />', () => {

  const styles = {
    dialog: {
      height: '350px',
      width: '350px',
    },
  };

  const props = {
    classes: styles,
    open: true,
    error: null,
    dispatch: jest.fn(),
  };

  it('Shallow renders along with the UsernameAndPasswordForm', () => {
    const wrapper = shallow(<LoginOrRegisterDialog {...props} />);
    expect(wrapper.find(UsernameAndPasswordForm).length).toEqual(1);
  });

  it('Renders one Tabs and two Tab(s)', () => {
    const wrapper = shallow(<LoginOrRegisterDialog {...props} />);
    expect(wrapper.find(Tabs).length).toEqual(1);
    expect(wrapper.find(Tab).length).toEqual(2);
  });

});
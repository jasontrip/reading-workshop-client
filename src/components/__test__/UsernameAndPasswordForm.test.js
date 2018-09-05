import React from 'react';
import { shallow } from 'enzyme';
import { UsernameAndPasswordForm } from '../UsernameAndPasswordForm';

describe('<UsernameAndPasswordForm />', () => {
  const callback = jest.fn();

  const props = {
    handleSubmit: callback,
    pristine: true,
    submitting: false,
    valid: true,
    onSubmit: callback,
    validateUsername: [],
    validatePassword: [],
    buttonText: 'hello',
  };

  it('Shallow renders', () => {
    const wrapper = shallow(<UsernameAndPasswordForm {...props} />);
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { WorkshopForm } from '../WorkshopForm';

describe('<WorkshopForm />', () => {

  const styles = {
    root: {
      maxWidth: '500px',
      marginTop: '15px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    formGrid: {
      padding: '25px',
    },
    textField: {
      width: '100%',
    },
    workshopTextField: {
    },
    notesField: {
      width: '100%',
    },
    button: {
      marginTop: '20px',
    },
  };

	const callback = jest.fn();

  const props = {
    handleSubmit: callback,
    dispatch: callback,
    editWorkshop: callback,
    classes: styles,
    editingWorkshop: {},
    pristine: true,
    submitting: false,
    valid: true
  }

  it('Shallow renders', () => {
    const wrapper = shallow(<WorkshopForm { ...props } />);
  });

});
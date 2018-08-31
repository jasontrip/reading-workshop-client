import React from 'react';
import { shallow } from 'enzyme';
import { Roster } from '../Roster';
// import { Tabs, Tab } from '@material-ui/core';
import RosterList from '../RosterList';
import StudentForm from '../StudentForm';
import TopAppBar from '../TopAppBar';

describe('<Roster />', () => {


	const props = {
		students: {
		}
	}

	it('Shallow renders and in initial state it renders the RosterList', () => {
    const wrapper = shallow(<Roster { ...props } />);
    expect(wrapper.find(TopAppBar).length).toEqual(1);
    expect(wrapper.find(RosterList).length).toEqual(1);
  });

  it('Shallow renders and shows the StudentForm if its state has an editingStudent', () => {
    const wrapper = shallow(<Roster { ...props } />);
    wrapper.setState({ editingStudent: {} })
    expect(wrapper.find(StudentForm).length).toEqual(1);
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { Workshops } from '../Workshops';
import WorkshopList from '../WorkshopList';
import WorkshopForm from '../WorkshopForm';
import TopAppBar from '../TopAppBar';

describe('<Workshops />', () => {

	it('Shallow renders and in initial state it renders the WorkshopList', () => {
    const wrapper = shallow(<Workshops />);
    expect(wrapper.find(TopAppBar).length).toEqual(1);
    expect(wrapper.find(WorkshopList).length).toEqual(1);
  });

  it('Shallow renders and shows the WorkshopForm if its state has an editingWorkshop', () => {
    const wrapper = shallow(<Workshops />);
    wrapper.setState({ editingWorkshop: {} })
    expect(wrapper.find(WorkshopForm).length).toEqual(1);
  });

  it('editWorkshop sets editingWorkshop', () => {
    const wrapper = shallow(<Workshops />);
    wrapper.instance().editWorkshop({});
    expect(wrapper.state('editingWorkshop')).toEqual({});
  });

});
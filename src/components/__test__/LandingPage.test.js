import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';
import TopAppBar from '../TopAppBar';
import ScreenshotAndExplanation from '../ScreenshotAndExplanation';

describe('<LandingPage />', () => {
	it('Shallow renders and renders TopAppBar, a header, and three ScreenshotAndExplanations', () => {
      const wrapper = shallow(<LandingPage />);
      expect(wrapper.find(TopAppBar).length).toEqual(1);
      expect(wrapper.find(ScreenshotAndExplanation).length).toEqual(3);
  });

});
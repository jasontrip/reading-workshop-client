import React from 'react';
import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import { App } from '../App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from '../store';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Provider store={store}><App /></Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
	it('Shallow renders, hasClass of App, and has a Router with 3 Routes', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.hasClass('App')).toEqual(true);
      expect(wrapper.find(Router).length).toEqual(1);
      expect(wrapper.find(Route).length).toEqual(3);
  });

});

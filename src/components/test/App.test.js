import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import { App } from '../App';
import {Provider} from 'react-redux';
// import store from '../store';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Provider store={store}><App /></Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
	it('Renders without crashing', () => {
      shallow(<App />);
  });
});

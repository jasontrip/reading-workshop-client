import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './store';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { blue, orange } from '@material-ui/core/colors';

const theme = createMuiTheme(
	{
		palette: {
	    primary: blue,
	    secondary: orange,
	  },
	}
);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();

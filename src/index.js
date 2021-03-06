import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducer';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import AppRouter from './routes/AppRouter';
import createStore from './store/configureStore';

const store = createStore();

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import AppRouter from './routes/AppRouter';

/** REDUX DEMO START */ 

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, setStartDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// actions - add expenses to state
store.dispatch(addExpense({ description: 'Water bill', amount: 2700, createdAt: 720000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 5400, createdAt: 950000 }));

// actions - add view filters to state
store.dispatch(setStartDate(730000));
let state = store.getState();

// selector - filter state expenses based on state filters
let visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

store.dispatch(setStartDate());

store.dispatch(setTextFilter('water'));
state = store.getState();

// test selector
visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

/** REDUX DEMO END */ 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
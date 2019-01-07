import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ** Expense Actions **
// ADD_EXPENSE
const addExpense = ( { description='', note='', amount=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount
    }
});

// REMOVE_EXPENSE
// EDIT_EXPENSE

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // this is equivalent to 'return state.concat(action.expense)
            // both return a new array without modifying original 'state' array
            return [
                ...state,
                action.expense
            ];

        default:
            return state;
    }
};


// ** Filter Actions **
// SET_FILTER_TEXT
// SET_SORT_BY_AMOUNT
// SET_SORT_BY_DATE
// FILTER_BY_START_DATE
// FILTER_BY_END_DATE

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortyBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation
// The object passed to combineReducers defines how the state would look like
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState()); 
});

// NOTE: All actions would be dispatch to all registered reducers. Only the reducer concerned 
// with a particular action would handle it, others would simply returns the state unchanged.
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 85000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 250 }));

const demoState = {
    expenses: [{
        id: 'jvgnfd',
        description: 'January Rent',
        note: 'This is the final payment',
        amount: 85000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
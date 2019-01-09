import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { EEXIST } from 'constants';

// ** Expense Actions **
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
// Incoming param object { id, description, note, amount } de-structured to 
// only pick out 'id' then rename it
const removeExpense = ({ id: expenseId }) => ({
    type: 'REMOVE_EXPENSE',
    expenseId
});

// EDIT_EXPENSE
const editExpense = (id, updateValues) => ({
    type: 'EDIT_EXPENSE',
    id,
    updateValues
});

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

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.expenseId); // notice param obj de-structuring

        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updateValues
                    };
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
};


// ** Filter Actions **
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

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

const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter(e => {
        const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        const textMatch = typeof text !== 'string' || text.length === 0
            || e.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // sort by descending dates
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // sort by descending amounts
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


// NOTE: All actions would be dispatch to all registered reducers. Only the reducer concerned 
// with a particular action would handle it, others would simply returns the state unchanged.

// // dispatch() returns the action object passed to it
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 85, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 250, createdAt: -1000 }));

// // remove 'expenseOne'
// store.dispatch(removeExpense(expenseOne.expense));

// // edit 'expenseTwo' to update amount to 500
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


// store.dispatch(setTextFilter('ren'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

store.dispatch(sortByDate());
store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'jvgnfd',
        description: 'January Rent',
        note: 'This is the final payment',
        amount: 85000,
        createdAt: 0
    }],
    filters: {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
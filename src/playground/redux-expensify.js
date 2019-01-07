import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(expensesReducer);

console.log(store.getState()); // would print state as simply '[]', not as { expenses: [] }

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
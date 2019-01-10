// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
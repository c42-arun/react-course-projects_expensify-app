import uuid from 'uuid';

// ** Expense Actions **
// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
export const removeExpense = ({ id: expenseId }) => ({
    type: 'REMOVE_EXPENSE',
    expenseId
});

// EDIT_EXPENSE
export const editExpense = (id, { description, amount, createdAt, note }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updateValues: {
        description,
        amount,
        createdAt,
        note
    }
});
import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ history, dispatch, expense }) => {
    console.log(expense);
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {

                    console.log('edited expense', expense);

                    const editActionObj = dispatch(editExpense(expense.id, expense));
                    console.log('edit action obj', editActionObj);

                    history.push('/');
                }}
            />
            <button onClick={(e) => {
                dispatch(removeExpense({ id: expense.id }));
                history.push('/');
            }}>
                Remove
        </button>
        </div>
    );
};

// has access to props passed to the HOC (from the Router in this case)
// - that would be merged with the object we return here and passed to the wrapped component 
const mapStateToProps = (state, props) => (
    {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
);

export default connect(mapStateToProps)(EditExpensePage);
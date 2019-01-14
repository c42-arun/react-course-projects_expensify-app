import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    console.log(props.expense);
    return (
        <div>
            Now editing expense with id {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {

                    console.log('edited expense', expense);

                    const editActionObj = props.dispatch(editExpense(props.expense.id, expense));
                    console.log('edit action obj', editActionObj);

                    props.history.push('/');
                }}
            />
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
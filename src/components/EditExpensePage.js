import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props);
    console.log(props.expenses.filter(exp => exp.id === props.match.params.id));
    return (
        <div>
            Now editing expense with id {props.match.params.id}
            <ExpenseForm expense={props.expenses.filter(exp => exp.id === props.match.params.id)} />
        </div>
    );
};

const mapStateToProps = (state) => (
    {
        expenses: state.expenses
    }
);

export default connect(mapStateToProps)(EditExpensePage);
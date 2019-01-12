import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// plain old stateless function component (POSFC)
// - props gets injected by the HOC; which is nothing but the state we pass in to the HOC creating function (line 20)
const ExpenseList = (props) => (
    <div>
        Expense List
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} /> // note the spread operator to pass individual propeties as props
        ))}
    </div>
);

// Create the HOC - this wraps our component and passes in the state required by the component
// created by calling connect()()
// - connect() -> actually returns the *HOC creating function*
// - connect(<callback returning the state reqd by WrappedComponent>) -> returns the function 
//                                                                      that is primed with the required state
// - connect(<callback returning the state reqd by WrappedComponent>)(<WrappedComponent>) -> 
//                  the function is now called so our component is wrapped within HOC and gets the state passed in

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);


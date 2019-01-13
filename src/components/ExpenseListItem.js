import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

/* 
Task: To get 'Remove' button to remove this expense from state
1. Get access to store dispatch() -> this is available as soon as we wrap the component using connect()
2. Call an action generator to create the action object to be passed to dispatch -> by importing the generator function from relevant module
*/
const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3>
            {description}
        </h3>
        <p>
            {amount} - {createdAt}
        </p>
        <button onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>
            Remove
        </button>
    </div>
);

// state not required by this component, so no 'mapStateToProps' callback passed
export default connect()(ExpenseListItem);
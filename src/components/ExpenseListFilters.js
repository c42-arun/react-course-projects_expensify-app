import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'; // action generator for text filter action}

// a component that reads as well as sets state
const ExpensesListFilters = (props) => (
    <div>
        <input type='text'
            value={props.filters.text} // <-- this is referred as "controlled input" meaning the input is controlled using Javascript
            // props also gets added with store's 'dispatch' method
            onChange={(e) => { props.dispatch(setTextFilter(e.target.value)) }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === "amount") {
                    props.dispatch(sortByAmount());
                } else if (e.target.value === "date") {
                    process.dispatch(sortByDate());
                }
            }}
        >
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpensesListFilters);
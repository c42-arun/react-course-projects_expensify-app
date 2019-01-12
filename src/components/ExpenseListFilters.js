import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters'; // action generator for text filter action

// a component that reads as well as sets state
const ExpensesListFilters = (props) => (
    <div>
        <input type='text'
            value={props.filters.text}    
            // props also gets added with store's 'dispatch' method
            onChange={(e) => { props.dispatch(setTextFilter(e.target.value)) }} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpensesListFilters);
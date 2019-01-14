import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'; // action generator for text filter action}

// a component that reads as well as sets state

class ExpensesListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onCalendarFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input type='text'
                    value={this.props.filters.text} // <-- this is referred as "controlled input" meaning the input is controlled using Javascript
                    // this.props also gets added with store's 'dispatch' method
                    onChange={(e) => { this.props.dispatch(setTextFilter(e.target.value)) }}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        } else if (e.target.value === "date") {
                            process.dispatch(sortByDate());
                        }
                    }}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onCalendarFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpensesListFilters);
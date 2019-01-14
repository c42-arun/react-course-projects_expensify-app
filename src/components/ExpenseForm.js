import React from 'react';
import moment from 'moment'; // SingleDatePicker API works with moment dates
import { SingleDatePicker } from 'react-dates'; // https://github.com/airbnb/react-dates
import 'react-dates/lib/css/_datepicker.css'; // CSS for SingleDatePicker

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // initialize with moment object representing today's date (as reqd by SingleDatePicker below)
            calendarFocused: false, // required by SingleDatePicker to show/hide the calendar - hidden to start with
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;

        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        // regex to match only numbers of format 0.00
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = createdAt => this.setState({ createdAt });

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please enter description and amount' }));
        } else {
            this.setState(() => ({ error: '' }));

            // raise onSubmit event passing an expense object
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // parse the string and convert to pence
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })} // PropTypes.func.isRequired
                        id="your_unique_id"
                        numberOfMonths={1}
                        isOutsideRange={day => (false)}
                    />
                    <textarea
                        placeholder="Enter an expense note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
}
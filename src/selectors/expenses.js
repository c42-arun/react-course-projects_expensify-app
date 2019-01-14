import moment from 'moment';

export default (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter(expense => {
        const createdAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        const textMatch = typeof text !== 'string' || text.length === 0
            || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // sort by descending dates
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // sort by descending amounts
        }
    });
};
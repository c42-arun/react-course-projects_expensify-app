export default (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter(e => {
        const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        const textMatch = typeof text !== 'string' || text.length === 0
            || e.description.toLowerCase().includes(text.toLowerCase());

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
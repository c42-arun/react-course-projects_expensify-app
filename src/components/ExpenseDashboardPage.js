import React from 'react';

import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This is the expensify dashboard component</div>
);

const ExpenseCreatePage = () => (
    <div>This is the expensify create component</div>
);

const ExpenseEditPage = () => (
    <div>This is the expensify edit component</div>
);

const HelpPage = () => (
    <div>This is the expensify help component</div>
);

const NotFoundPage = () => (
    <div>404!</div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={ExpenseCreatePage} />
            <Route path="/edit" component={ExpenseEditPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
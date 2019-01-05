import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

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
    <div>
        404! <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={ExpenseCreatePage} />
                <Route path="/edit" component={ExpenseEditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;